import { IsEmail, IsNotEmpty } from 'class-validator';

export class OtpLoginDto {
  @IsEmail({}, { message: 'Escriba un correo electronico valido' })
  @IsNotEmpty({ message: 'Escriba un correo electronico' })
  email: string;
}
