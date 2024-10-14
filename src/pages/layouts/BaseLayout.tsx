import { Outlet } from "react-router";
import { Footer, Header } from "../../components";

export function BaseLayout() {
  return (
    <div className="base">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
