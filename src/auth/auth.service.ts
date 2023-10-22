import { HttpException, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './schemas/auth.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: mongoose.Model<Auth>,
    private jwtService: JwtService,
  ) {}

  async create(auth: Auth) {
    const { password } = auth;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    const foundUser = await this.authModel.findOne({ username: auth.username });
    if (foundUser) {
      throw new HttpException('User not created', 400);
    }

    const createdAuth = await this.authModel.create({
      ...auth,
      password: hash,
    });
    return createdAuth;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.authModel.findOne({ username });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.authModel.findOne({ username });
    if (user) {
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Create a payload for the JWT
        const payload = { username: user.username, sub: user._id };

        // Sign the JWT token and return it
        const access_token = this.jwtService.sign(payload);

        // Log the user
        // console.log(user);

        return { access_token };
      }
    }

    return { message: 'Username or password incorrect' };
  }

  async getProfile(id: string) {
    const user = await this.authModel.findById(id);
    if (user) {
      return {
        _id: user._id,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    }
    return { message: 'User not found' };
  }
}
