import styles from "./index.module.css";
import type { Product } from "../../pages/Product";
import clsx from "clsx";

interface Props {
    images: Product['images']
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<keyof Product['images']>>
}

const Thumbnails = ({ 
    images, 
    selected, 
    setSelected
}: Props) => (
    <div className={styles['thumbnails']}>
        {Object.keys(images).map((key) => {
            const imgKey = key as keyof typeof images
            return (
                <img
                    key={key} 
                    className={clsx(
                        styles['thumbnail'],
                        imgKey === selected && styles['selected']
                    )} 
                    src={images[imgKey]}
                    onClick={() => setSelected(imgKey)}
                    onMouseOver={() => setSelected(imgKey)} />
            )
        })}
    </div>
)

export default Thumbnails;