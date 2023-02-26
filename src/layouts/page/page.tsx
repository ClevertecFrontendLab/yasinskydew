import { Header } from '../../pages/header/header';
import { Footer } from '../../pages/footer/footer';
import { Outlet } from 'react-router-dom';
import classes from './page-layout.module.scss';
import { FC } from 'react';
import { Breadcrumbs } from '../../components/breadcrums/breadcrumbs';
import { categoryAPI } from '../../services/category-service';
import { MainNavigation } from '../../components/main-navigation/main-navigation';
import { Loader } from '../../components/ui/loader/loader';

export const PageLayout: FC = () => {
    const { data, error, isLoading } = categoryAPI.useFetchAllCategoriesWithCountQuery();
    const categories = data?.categories || [];
    return (
        <section className={classes.bookPage}>
            <div className={[classes.headerWrapper, classes.container, classes.wrapper].join(' ')}>
                <Header />
                {isLoading && <Loader />}
                {!isLoading && !error && <MainNavigation navDisplayNone={true} categories={categories} />}
            </div>
            <Breadcrumbs />
            <Outlet />
            <div className={[classes.footerWrapper, classes.container, classes.wrapper].join(' ')}>
                <Footer />
            </div>
        </section>
    );
};
