import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { BasketPage } from "./pages/BasketPage";
import { BaseLayout } from "./pages/layouts/BaseLayout";
import './assets/index';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <p>error</p>,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/basket',
        element: <BasketPage />
      }
    ]
  }
])
