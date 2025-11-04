import styles from "./index.module.css";
import type { Product } from "../../pages/Product";

const ProductDetails = ({     
    category,
    subcategory,
    decade,
    size,
    pattern,
    color,
    material,
    condition,
    price
}: Omit<Product, 'images'>) => (
    <div className={styles['product-details']}>
        <div className={styles['product']}>
            <div className={styles['details']}>
                <span className={styles['label']}>Category</span>
                <span className="capitalize">{category}</span>
                <span className={styles['label']}>Subcategory</span>
                <span className="capitalize">{subcategory}</span>
                <span className={styles['label']}>Decade</span>
                <span>{decade}</span>
            </div>
            <div className={styles['details']}>
                <span className={styles['label']}>Price</span>
                <span>{price}</span>
                <span className={styles['label']}>Material</span>
                <span>{material}</span>
                <span className={styles['label']}>Color(s)</span>
                <span>{typeof color === 'string' ? color : color.join(", ")}</span>
                <span className={styles['label']}>Pattern</span>
                <span>{pattern}</span>
                <span className={styles['label']}>Condition</span>
                <span>{condition}</span>
                <span className={styles['label']}>Size</span>
                <span>{size}</span>
            </div>
        </div>
    </div>
)

export default ProductDetails;