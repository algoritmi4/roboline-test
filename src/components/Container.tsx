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

  useEffect(() => {
    if (!products) {
      getProducts()
        .then((res) => {
          setProducts(res.data.products.slice(0, 10));
          setIsPageReady(true)
        })
        .catch((err) => {
          // TODO: error handle
          console.log(err)
        })
    }
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
      <div className="content__cards">
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
            <Preloader />
          )
        }
      </div>
    </main>
  )
}
