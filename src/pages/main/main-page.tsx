import { FC, useState } from 'react';

import { BookCard, BookCardMode } from '../../components/book/book_card/book-card';
import { MainControls } from '../../components/main-controls/main-controls';
import classes from './main-page.module.scss';
import { IBook } from '../../models/IBook';
import { useBooks } from '../../hooks/useBooks';
import { useAppState } from '../../context';
import EmptyBookList from '../../components/book/empty-book-list/empty-book-list';
import EmptySearchList from '../../components/book/empty-search-list/empty-search-list';
import { useOutletContext } from 'react-router-dom';

export const MainPage: FC = () => {
    const [viewCardMode, setViewCardMode] = useState(BookCardMode.grid);
    const outletContext: { books: IBook[] } = useOutletContext();
    const { sort, sortDirection, query, category } = useAppState();
    const sortedAndSearchedBooks = useBooks(outletContext.books, sort, query, sortDirection, category);
    return (
        <section className={classes.main}>
            <MainControls viewCardMode={viewCardMode} setViewCardMode={setViewCardMode} />
            <div className={classes.bookList}>
                {sortedAndSearchedBooks.length === 0 && query === '' && <EmptyBookList />}
                {sortedAndSearchedBooks.length === 0 && query !== '' && <EmptySearchList />}
                {sortedAndSearchedBooks.length !== 0 &&
                    sortedAndSearchedBooks.map((card: IBook) => (
                        <BookCard viewCardMode={viewCardMode} key={card.id} bookCard={card} data-test-id='card' />
                    ))}
            </div>
        </section>
    );
};
