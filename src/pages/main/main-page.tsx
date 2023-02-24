import { FC, useState } from 'react';

import { BookCard, BookCardMode } from '../../components/book/book_card/book-card';
import { MainControls } from '../../components/main-controls/main-controls';
import classes from './main-page.module.scss';
import { bookAPI } from '../../services/book-service';
import { IBook } from '../../models/IBook';
import { Loader } from '../../components/ui/loader/loader';
import Error from '../../components/ui/error/error';
import { useBooks } from '../../hooks/useBooks';
import { useAppState } from '../../context';
import EmptyBookList from '../../components/book/empty-book-list/empty-book-list';

export const MainPage: FC = () => {
    const [viewCardMode, setViewCardMode] = useState(BookCardMode.grid);
    const { data: books = [], error, isLoading } = bookAPI.useFetchAllBooksQuery();
    const { sort, sortDirection, query, category } = useAppState();
    const sortedAndSearchedBooks = useBooks(books, sort, query, sortDirection, category);
    return (
        <section className={classes.main}>
            <MainControls viewCardMode={viewCardMode} setViewCardMode={setViewCardMode} />
            <div className={classes.bookList}>
                {isLoading && <Loader />}
                {error && <Error error={'Error'} />}
                {!isLoading && !error && sortedAndSearchedBooks.length === 0 && <EmptyBookList />}
                {!isLoading &&
                    !error &&
                    sortedAndSearchedBooks.length !== 0 &&
                    sortedAndSearchedBooks.map((card: IBook) => (
                        <BookCard viewCardMode={viewCardMode} key={card.id} bookCard={card} data-test-id='card' />
                    ))}
            </div>
        </section>
    );
};
