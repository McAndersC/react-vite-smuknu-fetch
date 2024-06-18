import ProductList from "../../components/products/productsList/ProductList";
const ProductsPage = () => {

    return (
        <div>
            <h1>Products Page</h1>
            <ProductList recommended={false} dev={false}></ProductList>
          
        </div>
    );
};
export default ProductsPage;