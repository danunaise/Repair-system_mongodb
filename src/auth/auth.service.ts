import { HttpException, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './schemas/auth.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: mongoose.Model<Auth>,
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
}
