import { useState } from "react";
import ProductList from "../../components/products/productsList/ProductList";

const HomePage = () => {


    const [devMode, setDevMode] = useState(false)

    return (
        <div>
            HOME INDHOLD
            <button onClick={ () => setDevMode(!devMode)}>Toggle DevMode {devMode.toString()}</button>
            <ProductList recommended={true} dev={devMode}></ProductList>
            
        </div>
    );
};
export default HomePage;