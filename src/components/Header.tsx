import { TrashIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ProductsContext } from "../helpers/ProductsProvider";

export function Header() {
  const navigate = useNavigate();
  const [productsCost, setProductsCost] = useState(0);

  const {
    products
  } = useContext(ProductsContext);

  useEffect(() => {
    const productsCost = products.reduce((acc, product) => {
      return acc += product.cost;
    }, 0);

    setProductsCost(productsCost);
  }, [products]);

  const navigateToHome = () => {
    navigate('/');
  }

  const navigateToBasket = () => {
    navigate('/basket');
  }

  return (
    <header className="header">
      <div onClick={navigateToHome} className="header__logo-box">
        <AcademicCapIcon className="icon logo" width={40} height={40} />
        <h1 className="header__title">Roboline</h1>
      </div>
      <div onClick={navigateToBasket} className="header__trash-box">
        {products.length ? (
          <div className="header__products-quantity">{products.length}</div>
        ) : (
          <></>
        )}
        <p className="header__trash-text">
          {products.length ? productsCost : 'Корзина'}
        </p>
        <TrashIcon className="icon" width={24} height={24} />
      </div>
    </header>
  )
}
