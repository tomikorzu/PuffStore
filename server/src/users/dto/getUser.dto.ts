export class GetUserDto {
  id: number;
  name: string;
  email: string;
  image?: string;
  phoneNumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
  purchases?: number;
  reviews?: number;
}
