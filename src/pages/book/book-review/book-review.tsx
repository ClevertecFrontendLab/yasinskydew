import {FC} from 'react';

import {Grade} from '../../../components/book/grade/grade';
import {IBookCardFull, IBookCardReview} from '../../../types/types';

import reviewIcon from './review_icon.svg';

import classes from './book-review.module.scss';
import classNames from "classnames";

export interface BookReviewProps {
    bookItem: IBookCardFull,
    toggleReview: () => void,
    isOpenReview: boolean,
}

export const BookReview:FC<BookReviewProps> = ({ bookItem, toggleReview, isOpenReview }) => {

    const createReview = (review: IBookCardReview) => (
        <li
            className={classes.reviewListItem}
            key={Math.random()}
        >
            <div className={classes.reviewData}>
                <img src={reviewIcon} alt="review avatar"/>
                <p className={classes.reviewAuthor}>{review.name} {review.secondName}</p>
                <p className={classes.reviewDate}>{review.date}</p>
            </div>
            <Grade hasGrade={true} grade={review.grade} />
            {review.text ? <p className={classes.reviewText}>{review.text}</p> : '' }
        </li>
    )

    return (
        <div className={classes.reviews}>
            <div className={classes.reviewsControl}>
                <h3 className={classes.reviewsTitle}>Отзывы</h3>
                <span className={classes.reviewsCount}>{bookItem.reviews.length}</span>
                <div
                    onClick={toggleReview}
                    className={classNames(classes.reviewsToggle, {
                        [classes.reviewsToggleRotate]: !isOpenReview,
                    })}
                    data-test-id='button-hide-reviews'
                />
            </div>
            <ul className={classes.reviewList}>
                {
                    isOpenReview && bookItem.reviews.map(((review: IBookCardReview) => createReview(review)))
                }
            </ul>

        </div>
    );
};
