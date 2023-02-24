import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../../ui/button/button';
import { Image, ImageType } from '../../ui/image/image';
import { Grade } from '../grade/grade';

import classes from './book_card.module.scss';
import { IBook } from '../../../models/IBook';
import dayjs from 'dayjs';
import { useAppState } from '../../../context';

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
    const { query } = useAppState();
    const selectColor = (title: string) => {
        if (!query) return title;
        const firstPosition = title.toLowerCase().indexOf(query.toLowerCase());
        if (firstPosition === -1) return title;
        const lastPosition = firstPosition + query.length + 1;
        const newStr = title.split('');
        newStr.splice(firstPosition, 0, '<span class="highlight">');
        newStr.splice(lastPosition, 0, '</span>');
        return <span dangerouslySetInnerHTML={{ __html: newStr.join('') }} />;
    };
    const getOrderContent = () =>
        bookCard.booking?.order ? `занята до ${dayjs(bookCard.booking.dateOrder).format('DD.MM')}` : 'забронировать';
    if (viewCardMode === BookCardMode.grid) {
        return (
            <Link {...props} to={link} className={[classes.bookCard, classes[viewCardMode]].join(' ')}>
                <Image url={bookCard.image?.url} type={ImageType.bookCard} />
                <Grade grade={bookCard.rating} />
                <p className={classes.bookCardTitle}>{query ? selectColor(bookCard.title) : bookCard.title}</p>
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
                    <p className={classes.bookCardTitle}>{query ? selectColor(bookCard.title) : bookCard.title}</p>
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
