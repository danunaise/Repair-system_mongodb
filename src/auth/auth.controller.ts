import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './schemas/auth.schema';
import { CreateUserDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }
}
