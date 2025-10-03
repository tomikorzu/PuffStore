import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @IsEmail(
    {},
    { message: 'Por favor proporcione un correo electronico valido' },
  )
  @IsNotEmpty({ message: 'Email es requerido' })
  email: string;

  @IsString({ message: 'El codigo OTP debe ser un string' })
  @IsNotEmpty({ message: 'El codigo OTP es requerido' })
  @Length(6, 6, { message: 'El codigo OTP debe tener exactamente 6 digitos' })
  code: string;
}
