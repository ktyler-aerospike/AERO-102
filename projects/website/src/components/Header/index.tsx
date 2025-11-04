import styles from "./index.module.css";
import logo from "../../assets/VestVault_Logo-small.png";
import { Link } from "react-router";
import Icon from "../Icon";

const Header = () => {
    return (
        <header className={styles['header']}>
            <nav className={styles['nav']}>
                <Link to="/" className={styles['logo']}>
                    <img src={logo} className={styles['logo-img']} />
                </Link>
                <Link to="/category">Categories</Link>
                <Link to="/decade">Decades</Link>
                <form>
                    <input 
                        className={styles['search']}
                        type='search'
                        name="search"
                        placeholder="Search" />
                </form>
                <div className={styles['controls']}>
                    <Icon name="cart" />
                    <Icon name="user-profile" />
                </div>
            </nav>
        </header>
    )
}

export default Header;