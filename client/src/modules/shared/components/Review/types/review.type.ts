export interface Review {
  id: number;
  review: string;
  rating: number;
  date?: string;
  createdBy: {
    id: number;
    name: string;
    email: string;
    image: string;
  };
}
