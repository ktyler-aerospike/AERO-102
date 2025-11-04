import styles from "./index.module.css";
import logo from "../../assets/VestVault_Logo.png";
import clsx from "clsx";
import { useLoaderData } from "react-router";
import type { Product } from "../Product";
import ProductList from "../../components/ProductList";
import Button from "../../components/Button";

export const loader = async () => {
    let response = await fetch(`/api/home`);
    let { error, data } = await response.json();
    if(error) throw new Response("", {
        status: 404,
        statusText: "Not Found"
    });
    return { products: data };
}

interface LoaderProps {
    products: Product[]
}

const Home = () => {
    const { products }: LoaderProps = useLoaderData()
    return (
        <>
        <section className={styles['hero']}>
            <div className={clsx(styles['hero-container'], 'container')}>
                <div className={styles['about']}>
                    <h1>Welcome to VestVault</h1>
                    <h3>The premiere place for vintage fashion</h3>
                    <p>VestVault Vintage Clothing has been providing the trendiest vintage looks to the raddest, hippest, most far-out, fashionistas since before most of our customers were born! We scour yard and garage sales, boot and jumble sales, flea markets, estate sales and beyond just to find you that exquisite one-of-a-kind piece.</p>
                    <div className={styles['links']}>
                        <Button href="/category" icon="arrow-right">Shop by category</Button>
                        <Button href="/decade" icon="arrow-right">Shop by decade</Button>
                    </div>
                </div>
                <div className={styles['logo-extras']}>
                    <div className={styles['logo-container']}>
                        <img src={logo} alt="VestVault logo" className={styles['logo']} />   
                    </div>
                </div>
            </div>
        </section>
        <section className="container">
            <h2>Explore our products</h2>
            <ProductList products={products} type="section" />
        </section>
        </>
    )
}

export default Home;
