import {FC} from 'react';
import {Link} from 'react-router-dom';
import {IBookCard} from '../../../types/types';
import {Button, ButtonSize, ButtonType} from '../../ui/button/button';
import {Image, ImageType} from '../../ui/image/image';
import {Grade} from '../grade/grade';

import classes from './book_card.module.scss';

export enum BookCardMode {
    grid = 'grid',
    list = 'list',
}

export interface BookCardProps {
    bookCard: IBookCard;
    viewCardMode: BookCardMode;
}
export const BookCard: FC<BookCardProps> = ({ bookCard, viewCardMode, ...props }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const link = `book/${bookCard.id}`;

    if (viewCardMode === BookCardMode.grid) {
        return (
            <Link {...props} to={link} className={[classes.bookCard, classes[viewCardMode]].join(' ')}>
                <Image url={bookCard.imageUrls[0]} type={ImageType.bookCard}/>
                <Grade hasGrade={bookCard.hasGrade} grade={bookCard.grade}/>
                <p className={classes.bookCardTitle}>{bookCard.title}</p>
                <p>{bookCard.author}, {bookCard.year}</p>
                <Button
                    size={ButtonSize.small}
                    type={bookCard.ordered ? ButtonType.secondary : ButtonType.primary }
                    disabled={!!bookCard.ordered}
                >
                    {bookCard.ordered ? bookCard.ordered : 'забронировать'}
                </Button>
            </Link>
        )
    }

    return (
        <Link {...props} to={link} className={[classes.bookCard, classes[viewCardMode]].join(' ')}>
            <Image url={bookCard.imageUrls[0]} type={ImageType.bookList}/>
            <div className={classes.bookListWrapper}>
                <div className={classes.bookListDescription}>
                    <p className={classes.bookCardTitle}>{bookCard.title}</p>
                    <p className={classes.bookCardAuthor}>{bookCard.author}, {bookCard.year}</p>
                </div>
                <div className={classes.grade}>
                    <Grade hasGrade={bookCard.hasGrade} grade={bookCard.grade}/>
                    <Button
                        size={ButtonSize.large}
                        type={bookCard.ordered ? ButtonType.secondary : ButtonType.primary }
                        disabled={!!bookCard.ordered}
                    >
                        {bookCard.ordered ? bookCard.ordered : 'забронировать'}
                    </Button>
                </div>
            </div>
        </Link>
    )
}

