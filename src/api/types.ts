export interface IProduct {
  image: string;
  title: string;
  cost: number;
  metaDescription: string;
  id: string;
}

export interface IGetProductsResponse {
  products: IProduct[];
}
