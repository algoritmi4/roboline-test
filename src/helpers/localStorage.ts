import { IProduct } from "../api/types";

export const setProductInStorage = (product: IProduct) => {
  const productsInStorage = localStorage.getItem('products');

  if (!productsInStorage) {
    localStorage.setItem('products', JSON.stringify([product]));
  } else {
    const newProducts = [...JSON.parse(productsInStorage), product];

    localStorage.setItem('products', JSON.stringify(newProducts));
  }
}

export const deleteProductFromStorage = (productId: string) => {
  const productsInStorage = localStorage.getItem('products');

  if (!productsInStorage) {
    return;
  } else {
    const parsedProducts: IProduct[] = JSON.parse(productsInStorage);

    const newProducts =
      parsedProducts.filter((product) => product.id !== productId);

    localStorage.setItem('products', JSON.stringify(newProducts));
  }
}

export const getProductsFromStorage = () => {
  const products = localStorage.getItem('products');

  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
}
