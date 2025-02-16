import { Controller, Post, Body, Request, UseGuards, Get, BadRequestException, Res } from '@nestjs/common';
import { IAuthRepository } from './repositories/IAuthRepository';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authRepository: IAuthRepository) {}

  @Post('login')
  async login(@Body() { email, password }) {
    const user = await this.authRepository.validateUser(email, password);
    
    if(!user) {
      throw new BadRequestException('Email ou senha incorretos.');
    }

    return this.authRepository.generateToken(user);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Request() req, @Res() res) {
    const token = await this.authRepository.generateToken(req.user);
    res.redirect(`${process.env.CLIENT_URL}/login?token=${token.access_token}`);
  }
}
