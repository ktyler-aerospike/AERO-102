import styles from "./index.module.css";
import { useLoaderData } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import ProductImages from "../../components/ProductImages";
import ProductDetails from "../../components/ProductDetails";
import clsx from "clsx";
import ProductList from "../../components/ProductList";

export interface Product {
    item_id: number
    category: string
    subcategory: string
    decade: string
    pattern: string
    color: string | string[]
    size: string
    material: string
    condition: string
    price: number
    images: {
        main: string
        front?: string
        back?: string
        left?: string
        right?: string
    }
}

export const loader = async (product: string) => {
    let response = await fetch(`/api/products/${product}`);
    let { error, data } = await response.json();

    if(error) throw new Response("", {
        status: 404,
        statusText: "Not Found"
    });
    return { product: data, related: [] };
}

interface LoaderProps {
    product: Product
    related: Product[]
}

const Product = () => {
    const { product: {images, ...product}, related }: LoaderProps = useLoaderData();
    return (
        <>
        <section className={clsx("container", styles['product-container'])}>
            <Breadcrumbs 
                items={[
                    product.category,
                    product.subcategory,
                    product.decade,
                ]} />
            <div className={styles['product']}>
                <ProductImages images={images} />
                <div className={styles['product-details']}>
                    <ProductDetails {...product} />
                    <div className={styles['purchase']}>
                        <h3>{product.price}</h3>
                        <p>Free shipping!</p>
                        <p><Icon name="check"/>In stock</p>
                        <div className={styles['controls']}>
                            <Button icon="cart-add" className={styles['btn']}>Add to cart</Button>
                            <Button icon="cart" variant="secondary" className={styles['btn']}>Buy now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='container'>
            <h2>Related items</h2>
            <ProductList products={related} type="section" />
        </section>
        </>
    )
}

export default Product;