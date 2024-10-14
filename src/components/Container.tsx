import { ChangeEvent, useEffect, useState } from "react"
import { getProducts } from "../api/api"
import { IProduct } from "../api/types";
import { Preloader } from "./Preloader";
import { Card } from "./Card";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function Container() {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isPageReady, setIsPageReady] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!products) {
      getProducts()
        .then((res) => {
          setProducts(res.data.products.slice(0, 10));
          setIsPageReady(true);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const getInputValue = () => {
    if (!products) return [];

    return products.filter((text) => text.title.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <main className="content">
      <label htmlFor="search" className="content__search">
        <MagnifyingGlassIcon className="icon" />
        <input
          id="search"
          placeholder="Поиск"
          type="text"
          onChange={handleInputChange}
          className="content__input"
        />
      </label>
      <div className={`content__cards ${!isPageReady ? "content__cards_onload" : ""}`}>
        {
          isPageReady && products ? (
            <>
              {
                getInputValue().map((product) => (
                  <Card key={product.id} card={product} />
                ))
              }
            </>
          ) : (
            <>
              {
                isError ? (
                  <p>Ошибка на сервере. Попробуйте перезагрузить страницу</p>
                ) : (
                  <Preloader />
                )
              }
            </>
          )
        }
      </div>
    </main>
  )
}
