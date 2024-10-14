import { AxiosResponse } from "axios"
import { apiInstance } from "./instance"
import { IGetProductsResponse } from "./types";

export const getProducts = async () => {
  const response: AxiosResponse<IGetProductsResponse> = await apiInstance('/products');

  return response;
}
