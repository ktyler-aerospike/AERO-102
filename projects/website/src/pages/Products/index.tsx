import styles from "./index.module.css";
import { useLoaderData } from "react-router";
import type { Product } from "../Product";
import clsx from "clsx";
import ProductList from "../../components/ProductList";

export const loader = async (filter: string, item: string) => {
    let response = await fetch(`/api/products/${filter}/${item}`);
    let { error, data } = await response.json();
    if(error) throw new Response("", {
        status: 404,
        statusText: "Not Found"
    });
    return { filter, item, products: data };
}

interface LoaderProps {
    filter: string
    item: string
    products: Product[]
}

const Products = () => {
    const { filter, item, products }: LoaderProps = useLoaderData();
    return (
        <div className={clsx("container", styles['products'])}>
            <h2><span>{filter}</span> | <span>{item}</span></h2>
            <ProductList products={products} />
        </div>
    )
}

export default Products;