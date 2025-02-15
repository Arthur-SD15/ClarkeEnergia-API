import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserGoogleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  googleId: string;
}
