import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/Footer";
import ProductsPage from "./pages/products/ProductsPage";
import MemberPage from "./pages/member/MemberPage";
import ReviewList from "./components/reviews/reviewList/ReviewList";
import PlaygroundPage from "./pages/playground/playgroundPage";


function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/products",
      element : <ProductsPage></ProductsPage>
    },
    {
      path: "/reviews",
      element : <ReviewList></ReviewList>
    },
    {
      path: "/bliv-medlem",
      element : <MemberPage></MemberPage>
    },
    {
      path: "/playground",
      element : <PlaygroundPage></PlaygroundPage>
    },
  ]);


  return <>
    
    <div>

        <Navigation></Navigation>
          <div>
          
              {routes}
          
          </div>
        <Footer></Footer>

    </div>
    
  </>;

}

export default App;
