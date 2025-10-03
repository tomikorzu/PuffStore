import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendOtpEmail(email: string, otpCode: string): Promise<void> {
    const htmlTemplate = this.getOtpEmailTemplate(otpCode);

    console.log(process.env.SMTP_USER);
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Código de verificación - PuffStore',
      html: htmlTemplate,
    };

    await this.transporter.sendMail(mailOptions);
  }

  private getOtpEmailTemplate(otpCode: string): string {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Código de Verificación</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
          }
          .content {
            padding: 40px 30px;
            text-align: center;
          }
          .otp-code {
            background-color: #f8f9fa;
            border: 2px dashed #667eea;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
            font-size: 32px;
            font-weight: bold;
            color: #667eea;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
          }
          .message {
            color: #555;
            font-size: 16px;
            margin-bottom: 20px;
          }
          .warning {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
          }
          .warning p {
            margin: 0;
            color: #856404;
            font-size: 14px;
          }
          .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🛍️ PuffStore</div>
            <h1>Código de Verificación</h1>
          </div>
          
          <div class="content">
            <p class="message">
              Hemos recibido una solicitud para verificar tu cuenta. 
              Usa el siguiente código para completar el proceso:
            </p>
            
            <div class="otp-code">
              ${otpCode}
            </div>
            
            <p class="message">
              Este código es válido por <strong>10 minutos</strong>.
            </p>
            
            <div class="warning">
              <p>
                <strong>⚠️ Importante:</strong> Si no solicitaste este código, 
                ignora este email. Nunca compartas tu código con nadie.
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p>© 2025 PuffStore. Todos los derechos reservados.</p>
            <p>Este es un email automático, por favor no respondas a este mensaje.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
