import React from 'react';
import classes from './empty-book-list.module.scss';

const EmptyBookList = () => {
    return (
        <div className={classes.emptyListContainer}>
            <h3 className={classes.emptyListTitle}>По запросу ничего не найдено</h3>
        </div>
    );
};

export default EmptyBookList;
