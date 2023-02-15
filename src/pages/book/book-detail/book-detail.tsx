import { FC } from 'react';
import { getDetailColumns } from './mock';
import classes from './book-detail.module.scss';
import { IBookDetail } from '../../../models/IBookDetail';

export interface BookDetailProps {
    bookItem: IBookDetail;
}
export const BookDetail: FC<BookDetailProps> = ({ bookItem }) => {
    const [leftDetails, rightDetails] = getDetailColumns(bookItem);

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
};
