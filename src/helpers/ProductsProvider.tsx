import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IProduct } from "../api/types";
import { getProductsFromStorage } from "./localStorage";

interface IProductsContext {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  setProducts: () => {return}
});

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>(() => {
    const products = getProductsFromStorage();

    return products;
  });

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
