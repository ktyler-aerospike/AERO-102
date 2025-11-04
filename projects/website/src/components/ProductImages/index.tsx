import styles from "./index.module.css";
import Thumbnails from "../Thumbnails";
import type { Product } from "../../pages/Product";
import { useState } from "react";

interface Props {
    images: Product['images']
}

const ProductImages = ({ images }: Props) => {
    const [ selected, setSelected] = useState<keyof typeof images>('main');

    return (
        <div className={styles['images']}>
            <Thumbnails 
                images={images}
                selected={selected}
                setSelected={setSelected} />
            <div className={styles['selected-img']}>
                <img src={images[selected]} className={styles['selected']} />
            </div>
        </div>
    )
}

export default ProductImages;