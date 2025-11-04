import styles from "./index.module.css";
import { Link } from "react-router";

interface Props {
    items: string[]
}

const Breadcrumbs = ({ items }: Props) => {
    const [category, subcategory, decade] = items;
    return (
        <div className={styles['breadcrumbs']}>
            <Link to={`/category/${category.toLowerCase()}`} className={styles['item']}>{category}</Link>
            <span>/</span>
            <Link to={`/subcategory/${subcategory.toLowerCase()}`} className={styles['item']}>{subcategory}</Link>
            <span>/</span>
            <Link to={`/decade/${decade}`} className={styles['item']}>{decade}</Link>
        </div>
    )
}

export default Breadcrumbs;