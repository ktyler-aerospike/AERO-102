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
    item_id: number;
    category: string;
    subcategory: string;
    decade: string;
    pattern: string;
    color: string | string[];
    size: string;
    material: string | string[];
    condition: string;
    price: number;
    description: string;
    related: number | number[];
    images: {
        main: string;
        front?: string;
        back?: string;
        left?: string;
        right?: string;
    };
}

// What the loader returns
interface LoaderProps {
    product: Product;
    related: Product[];
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const productId = params.product; // or params.productId depending on your route

    if (!productId) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    const response = await fetch(`/api/products/${productId}`);

    if (!response.ok) {
        throw new Response("", {
            status: response.status,
            statusText: response.statusText || "Not Found",
        });
    }

    // adjust this to whatever your API actually returns
    const { error, data, related } = await response.json();

    if (error || !data) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    const relatedProducts: Product[] = Array.isArray(related) ? related : [];

    const loaderData: LoaderProps = {
        product: data,
        related: relatedProducts,
    };

    return loaderData;
};

const Product = () => {
    const { product, related } = useLoaderData() as LoaderProps;
    const { images, ...rest } = product;

    return (
        <>
            <section className={clsx("container", styles["product-container"])}>
                <Breadcrumbs
                    items={[
                        rest.category,
                        rest.subcategory,
                        rest.decade,
                    ]}
                />
                <div className={styles["product"]}>
                    <ProductImages images={images} />
                    <div className={styles["product-details"]}>
                        <ProductDetails {...rest} />
                        <div className={styles["purchase"]}>
                            <h3>{product.price}</h3>
                            <p>Free shipping!</p>
                            <p>
                                <Icon name="check" />
                                In stock
                            </p>
                            <div className={styles["controls"]}>
                                <Button icon="cart-add" className={styles["btn"]}>
                                    Add to cart
                                </Button>
                                <Button
                                    icon="cart"
                                    variant="secondary"
                                    className={styles["btn"]}
                                >
                                    Buy now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <h2>Related items</h2>
                <ProductList products={related} type="section" />
            </section>
        </>
    );
};

export default Product;
