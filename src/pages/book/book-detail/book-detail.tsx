import {FC} from 'react';

import {IBookCardFull} from '../../../types/types';

import {getDetailColumns} from './mock';

import classes from './book-detail.module.scss';

export interface BookDetailProps {
    bookItem: IBookCardFull,
}
export const BookDetail:FC<BookDetailProps> = ({ bookItem }) => {

    const [leftDetails, rightDetails] = getDetailColumns(bookItem.details);

    return (
        <div className={classes.bookCardDetails}>
            <h3>Подробная информация</h3>
            <div className={classes.detailsList}>
                <ul className={classes.leftList}>
                    {leftDetails.map((detail) => (
                        <li className={classes.detailsItem} key={Math.random()}>
                            <span className={classes.detailsItemName}>{detail.name}</span>
                            <span className={classes.detailsItemValue}>{detail.value}</span>
                        </li>
                    ))}
                </ul>
                <ul className={classes.rightList}>
                    {rightDetails.map((detail) => (
                        <li className={classes.detailsItem} key={Math.random()}>
                            <span className={classes.detailsItemName}>{detail.name}</span>
                            <span className={classes.detailsItemValue}>{detail.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
