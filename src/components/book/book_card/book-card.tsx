import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../../ui/button/button';
import { Image, ImageType } from '../../ui/image/image';
import { Grade } from '../grade/grade';

import classes from './book_card.module.scss';
import { IBook } from '../../../models/IBook';
import dayjs from 'dayjs';

export enum BookCardMode {
    grid = 'grid',
    list = 'list',
}

export interface BookCardProps {
    bookCard: IBook;
    viewCardMode: BookCardMode;
}
export const BookCard: FC<BookCardProps> = ({ bookCard, viewCardMode, ...props }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const link = `books/all/${bookCard.id}`;

    const getOrderContent = () =>
        bookCard.booking?.order ? `занята до ${dayjs(bookCard.booking.dateOrder).format('DD.MM')}` : 'забронировать';
    if (viewCardMode === BookCardMode.grid) {
        return (
            <Link {...props} to={link} className={[classes.bookCard, classes[viewCardMode]].join(' ')}>
                <Image url={bookCard.image?.url} type={ImageType.bookCard} />
                <Grade grade={bookCard.rating} />
                <p className={classes.bookCardTitle}>{bookCard.title}</p>
                <p>
                    {bookCard.authors}, {bookCard.issueYear}
                </p>
                <Button
                    size={ButtonSize.small}
                    type={bookCard.booking?.order ? ButtonType.secondary : ButtonType.primary}
                    disabled={bookCard.booking?.order}
                >
                    {getOrderContent()}
                </Button>
            </Link>
        );
    }

    return (
        <Link {...props} to={link} className={[classes.bookCard, classes[viewCardMode]].join(' ')}>
            <Image url={bookCard.image?.url} type={ImageType.bookList} />
            <div className={classes.bookListWrapper}>
                <div className={classes.bookListDescription}>
                    <p className={classes.bookCardTitle}>{bookCard.title}</p>
                    <p className={classes.bookCardAuthor}>
                        {bookCard.authors}, {bookCard.issueYear}
                    </p>
                </div>
                <div className={classes.grade}>
                    <Grade grade={bookCard.rating} />
                    <Button
                        size={ButtonSize.large}
                        type={bookCard.booking?.order ? ButtonType.secondary : ButtonType.primary}
                        disabled={bookCard.booking?.order}
                    >
                        {getOrderContent()}
                    </Button>
                </div>
            </div>
        </Link>
    );
};
