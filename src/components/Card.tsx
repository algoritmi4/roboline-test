import { useContext, useEffect, useState } from "react";
import { IProduct } from "../api/types"
import { deleteProductFromStorage, setProductInStorage } from "../helpers/localStorage";
import { ProductsContext } from "../helpers/ProductsProvider";

interface ICardProps {
  card: IProduct;
}

export function Card({
  card
}: ICardProps) {
  const [isInBasket, setIsInBasket] = useState(false);

  const {
    products,
    setProducts
  } = useContext(ProductsContext);

  useEffect(() => {
    if (!products) return;

    const isInBasket = products.some((product) => product.id === card.id);

    setIsInBasket(isInBasket);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleButtonClick = () => {
    if (isInBasket) {
      deleteProductFromStorage(card.id);

      setProducts((state) => state.filter((product) => product.id !== card.id));
    } else {
      setProductInStorage(card);

      setProducts((state) => ([
        ...state,
        card
      ]))
    }
  }

  return (
    <article className="card">
      <img className="card__image" src={card.image} alt={card.metaDescription} />
      <p className="card__title">{card.title}</p>
      <p className="card__price">Цена: {card.cost}</p>
      <button
        type="button"
        className="card__button"
        onClick={handleButtonClick}
      >{isInBasket ? 'Удалить из корзины' : 'Добавить в корзину'}
      </button>
    </article>
  )
}
