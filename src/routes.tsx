import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";

type route = {
  path: string,
  element: React.JSX.Element
}

const routes : route[] = [
  {path: '/', element: <Home/>},
  {path: '/shop', element: <Shop/>},
  {path: '/blog', element: <Blog/>},
  {path: '/products/:id', element: <SingleProduct/>}
]

export default routes