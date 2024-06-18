import styles from "./productList.module.css";
import ProducListItem from "../productListItem/ProductListItem";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({loading}) => {

    return   <ClipLoader
    color={"red"}
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />

  

}

const DebugElement = (obj) => {

  return <pre>{JSON.stringify(obj, null, 2)}</pre>

}

const ProductList = ({recommended = false, dev = true}) => {
  
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [devMode, setDevMode] = useState(dev);

    useEffect( () => {

        setDevMode(dev)

    }, [dev])

    useEffect( () => {

      const getProducts = async () => {

        const result = await fetch("https://smuknu.webmcdm.dk/products");
        let response = await result.json()

        response = recommended ? response.filter( (p) => p.recommended === true) : response

        setList(response)
        setLoading(false)


      }

      setLoading(true)

      getProducts();

    }, [setLoading, recommended])


    return (
        <section className={styles.productList}>
            <h1>
              Recommended: {recommended.toString()}<br/>
              DEVMode: {devMode.toString()}
            </h1>
          
            {/* <button onClick={() => setDevMode(!devMode)}>TOGGLE DEVMODE</button> */}


            <Loader loading={loading}></Loader>

            {list.map((product) => {

                return devMode ? <DebugElement obj={product} key={product._id}></DebugElement> : <ProducListItem key={product._id} product={product}></ProducListItem>
               

              
                
            })}
            
        </section>
    );
};

export default ProductList;