import React from 'react';
import classes from './empty-search-list.module.scss';

const EmptySearchList = () => {
    return (
        <div className={classes.emptyListContainer}>
            <h3 className={classes.emptyListTitle} data-test-id='search-result-not-found'>
                По запросу ничего не найдено
            </h3>
        </div>
    );
};

export default EmptySearchList;
