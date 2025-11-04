import styles from "./index.module.css";

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['content']}>
                <span>VestVault a division of Aerospike Education (not really)</span>
            </div>
        </footer>
    )
}

export default Footer;