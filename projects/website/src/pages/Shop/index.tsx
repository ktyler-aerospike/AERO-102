import { Link } from "react-router";
import styles from "./index.module.css";
import Icon from "../../components/Icon";

interface Props {
    page: string
    options: {
        [key: string]: {
            name: string
            image: string
            description: string
        }
    }
}

const Shop = ({ page, options }: Props) => (
    <section className="container">
        <h2>Shop by {page}</h2>
        <div className={styles['options']}>
            {Object.keys(options).map(key => (
                <Link to={key} key={key} className={styles['option']}>
                    {options[key].image ? (
                        <img src={options[key].image} alt={options[key].name}/>
                    ):(
                        <>
                        <div className={styles["placeholder"]}>
                            <Icon name="image" size="xl" />
                        </div>
                        <span>{key}</span>
                        </>
                    )}
                </Link>
            ))}
        </div>
    </section>
)

export default Shop;