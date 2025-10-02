export interface AuthenticatedUser {
  id: number;
  email: string;
  name: string | null;
  image: string | null;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
