import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'
import { ProductsProvider } from './helpers/ProductsProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={appRouter} />
    </ProductsProvider>
  </StrictMode>,
)
