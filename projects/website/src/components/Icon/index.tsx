import { Icons } from "./icons";
import styles from './index.module.css';

interface Props {
    name: keyof typeof Icons
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Icon = ({ name, size = 'md' }: Props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
        dangerouslySetInnerHTML={{__html: Icons[name]}}
        className={styles[size]} />
)

export default Icon;