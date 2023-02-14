import {FC} from 'react';

import {Grade} from '../../../components/book/grade/grade';

import classes from './book-grade.module.scss';
import {IBookDetail} from "../../../models/IBookDetail";

interface BookGradeProps {
    bookItem: IBookDetail,
}
export const BookGrade: FC<BookGradeProps> = ({ bookItem }) => (
        <div className={classes.bookGrade}>
            <h3>Рейтинг</h3>
            <div className={classes.score}>
                <Grade grade={bookItem.rating} />
                { bookItem.rating && <div>{bookItem.rating}</div> }
            </div>
        </div>
    );
