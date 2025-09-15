export interface LoginData {
  title: string;
  description: string;
  cta_text: string;
  image: {
    url: string;
  };
}

export interface HomeData {
  title: string;
  description: string;
  image: {
    url: string;
  };
  Stats: {
    id: string;
    title: string;
    description: string;
  }[];
}
