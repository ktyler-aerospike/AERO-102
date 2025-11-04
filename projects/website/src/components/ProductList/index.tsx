import type { Product } from "../../pages/Product";
import Card from "../Card";
import styles from "./index.module.css";
import clsx from "clsx";

interface Props {
    products: Product[]
    type?: 'page' | 'section'
}

const ProductList = ({ products, type = 'page' }: Props ) => {
    const hasProducts = products.length > 0
    return(
        <div 
            className={
                clsx(
                    styles['product-list'],
                    styles[type],
                    !hasProducts && styles['empty']
                )
            } 
        >
            {hasProducts ? (
                products.map(product => (
                    <Card key={product.item_id} product={product} />
                ))
            ) : (
                <span>No products available</span>
            )}
        </div>
    )
}

export default ProductList