import {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { Button, ButtonSize, ButtonType } from '../../components/ui/button/button';
import { BookDetail } from './book-detail/book-detail';
import { BookGrade } from './book-grade/book-grade';
import { BookPreview } from './book-preview/book-preview';
import { BookReview } from './book-review/book-review';

import classes from './book-page.module.scss';
import { bookAPI } from '../../services/book-service';
import Error from "../../components/ui/error/error";
import {Loader} from "../../components/ui/loader/loader";
import {useAppDispatch} from "../../context";
export const BookPage: FC = () => {
  const { id } = useParams();
  const { data: book, error, isLoading } = bookAPI.useFetchBookByIdQuery(Number(id));
  const dispatch = useAppDispatch();

  const [isOpenReview, setIsOpenReview] = useState<boolean>(true);
  const toggleReview = () => setIsOpenReview(!isOpenReview);
  const closeReview = () => setIsOpenReview(false);
    useEffect(() => {
      console.log(error);
    }, [error]);
    useEffect(() => {
        if(!book) return;
        dispatch({ type: 'SET_BREAD_CRUMBS', payload: [book.categories[0], book.title] });
    }, [book]);
  if (isLoading) {
    return <Loader />
  }
  if (book) {
    return (
      <section className={[classes.bookPageContent, classes.container, classes.wrapper].join(' ')}>
        <BookPreview bookItem={book} />
        <BookGrade bookItem={book} />
        <BookDetail bookItem={book} />
        <BookReview comments={book.comments || []} toggleReview={toggleReview} isOpenReview={isOpenReview} />
        <div className={classes.gradeButton}>
          <Button
            size={ButtonSize.large}
            type={ButtonType.primary}
            width='100%'
            onClick={closeReview}
            data-test-id='button-rating'
          >
            Оценить книгу
          </Button>
        </div>
      </section>
    );
  }
  return <Error error={'Book page error'} />;
};
