import {FC} from 'react';

import classes from './social-item.module.scss';

export interface SocialItemProps {
    src: string;
    alt: string;
    href: string;
}
export const SocialItem: FC<SocialItemProps> = ({ src, alt, href}) => (
        <li className={classes.socialItem}>
            <a href={href}>
                <img src={src} alt={alt}/>
            </a>
        </li>
    );
