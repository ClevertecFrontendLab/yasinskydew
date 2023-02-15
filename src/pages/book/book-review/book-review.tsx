import { FC } from 'react';

import { Grade } from '../../../components/book/grade/grade';

import reviewIcon from './review_icon.svg';

import classes from './book-review.module.scss';
import classNames from 'classnames';
import dayjs from 'dayjs';
import {IBookComment} from "../../../models/IBookDetail";

export interface BookReviewProps {
    comments: IBookComment[];
    toggleReview: () => void;
    isOpenReview: boolean;
}

export const BookReview: FC<BookReviewProps> = ({ comments, toggleReview, isOpenReview }) => {
    const createReview = (review: IBookComment) => (
        <li className={classes.reviewListItem} key={Math.random()}>
            <div className={classes.reviewData}>
                <img src={reviewIcon} alt='review avatar' />
                <p className={classes.reviewAuthor}>
                    {review.user?.firstName} {review.user?.lastName}
                </p>
                <p className={classes.reviewDate}>{dayjs(review.createdAt).format('YYYY-MM-DD')}</p>
            </div>
            <Grade grade={review.rating} />
            {review.text ? <p className={classes.reviewText}>{review.text}</p> : ''}
        </li>
    );

    return (
        <div className={classes.reviews}>
            <div className={classes.reviewsControl}>
                <h3 className={classes.reviewsTitle}>Отзывы</h3>
                <span className={classes.reviewsCount}>{comments.length}</span>
                {!!comments.length && (
                    <div
                        onClick={toggleReview}
                        className={classNames(classes.reviewsToggle, {
                            [classes.reviewsToggleRotate]: !isOpenReview,
                        })}
                        data-test-id='button-hide-reviews'
                    />
                )}
            </div>
            {!!comments.length &&
                <ul className={classes.reviewList}>
                    {isOpenReview && comments.map((review: IBookComment) => createReview(review))}
                </ul>
            }
        </div>
    );
};
