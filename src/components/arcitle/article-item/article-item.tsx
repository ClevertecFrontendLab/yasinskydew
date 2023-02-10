import {FC, ReactNode} from 'react';

import {PointI} from '../article';

import classes from './article-item.module.scss';

export enum ArticleType {
    head = 'head',
    secondary = 'secondary',
}

export interface ArticleItemProps {
    item: PointI,
    type: ArticleType,
    idPrefix?: string,
    children?: ReactNode;
}


export const ArticleItem:FC<ArticleItemProps> = ({ item, type, idPrefix, children}) => {
    const count = idPrefix ? `${idPrefix}.${item.id}` : item.id;

    return (
        <li className={[classes.articleItem, classes[type]].join(' ')} key={item.id}>
            {count}. {item.text}
            {children}
        </li>
    );
}
