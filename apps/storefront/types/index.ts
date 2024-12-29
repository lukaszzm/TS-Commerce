export type Category = {
  id: number;
  name: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  categoryId: number;
};
