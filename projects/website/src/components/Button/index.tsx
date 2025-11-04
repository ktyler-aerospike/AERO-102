import type { PropsWithChildren } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import type { Icons } from '../Icon/icons';
import Icon from '../Icon';
import { Link } from 'react-router';

interface Props extends PropsWithChildren {
    href?: string
    variant?: 'primary' | 'secondary' | 'tertiary'
    className?: string
    icon?: keyof typeof Icons
}

const Button = ({
    href,
    variant = 'primary',
    className,
    icon,
    children
}: Props) => {
    const isLink = !!href;
    const isExternal = !!href?.startsWith('http');
    const Wrapper =  isExternal ? 'a' : 'button';
    const wrapperProps = isExternal ? {
        href,
        target: '_blank', 
        rel: 'noopener noreferrer' 
    } : {}
    const classList = clsx(styles["button"], styles[variant], className)
    return (
        isExternal || !isLink ? (
            <Wrapper 
                className={classList}
                {...wrapperProps}
            >
                {children}
                {icon && <Icon name={icon} size='sm'/>}
            </Wrapper> ) : (
            <Link to={href} className={classList}>
                {children}
                {icon && <Icon name={icon} size='sm'/>}
            </Link>
        )
    )
}

export default Button;