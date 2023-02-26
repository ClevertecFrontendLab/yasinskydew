import { FC } from 'react';

import { Button, ButtonSize, ButtonType } from '../../../components/ui/button/button';
import { Image, ImageType } from '../../../components/ui/image/image';
import classes from './book-preview.module.scss';

import { BookSlider } from '../book-slider/book-slider';
import { IBookDetail } from '../../../models/IBookDetail';

export interface BookPreviewProps {
    bookItem: IBookDetail;
}

export const BookPreview: FC<BookPreviewProps> = ({ bookItem }) => {
    return (
        <div className={classes.bookPreview}>
            <div className={classes.bookImage}>
                {!bookItem.images.length || bookItem.images.length === 1 ? (
                    <div className={classes.bookImage}>
                        <Image type={ImageType.preview} url={bookItem.images[0].url} data-test-id='slide-big' />
                    </div>
                ) : (
                    <BookSlider bookItem={bookItem} />
                )}
                <div className={classes.mySwiper2}></div>
            </div>
            <div className={classes.bookAuthor}>
                <h2 data-test-id='book-title'>{bookItem.title}</h2>
                <p className={classes.author}>
                    {bookItem.authors}, {bookItem.issueYear}
                </p>
                <div className={classes.bookingButton}>
                    <Button size={ButtonSize.large} type={ButtonType.primary} width='100%'>
                        Забронировать
                    </Button>
                </div>
            </div>
            <div className={classes.bookDescription}>
                <h3 className={classes.descriptionTitle}>О книге</h3>
                <p className={classes.descriptionContent}>{bookItem.description}</p>
            </div>
        </div>
    );
};
