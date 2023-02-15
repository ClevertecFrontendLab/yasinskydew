import { Header } from '../../pages/header/header';
import { Footer } from '../../pages/footer/footer';
import { Outlet } from 'react-router-dom';
import classes from './page-layout.module.scss';
import { FC } from 'react';
import { Breadcrumbs } from '../../components/breadcrums/breadcrumbs';
import { MainNavigation } from '../../components/main-navigation/main-navigation';

export const PageLayout: FC = () => {
    return (
        <section className={classes.bookPage}>
            <div className={[classes.headerWrapper, classes.container, classes.wrapper].join(' ')}>
                <Header />
                <MainNavigation navDisplayNone={true} />
            </div>
            <Breadcrumbs />
            <Outlet />
            <div className={[classes.footerWrapper, classes.container, classes.wrapper].join(' ')}>
                <Footer />
            </div>
        </section>
    );
};
