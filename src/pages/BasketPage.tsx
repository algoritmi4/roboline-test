import { useContext } from "react"
import { ProductsContext } from "../helpers/ProductsProvider"
import { Card } from "../components/Card";

export function BasketPage() {
  const {
    products
  } = useContext(ProductsContext);

  return (
    <main className="content">
      <div className="content__cards">
        {
          products.length ? (
            <>
              {
                products.map((product) => (
                  <Card key={product.id} card={product} />
                ))
              }
            </>
          ) : (
            <p>В корзине пусто</p>
          )
        }
      </div>
    </main>
  )
}
