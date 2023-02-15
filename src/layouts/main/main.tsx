import { Header } from '../../pages/header/header';
import { MainNavigation } from '../../components/main-navigation/main-navigation';
import { Footer } from '../../pages/footer/footer';
import { Outlet } from 'react-router-dom';
import classes from './main-layout.module.scss';
import { FC } from 'react';
export const MainLayout: FC = () => {
    return (
        <>
            <section className={[classes.mainLayout, classes.container, classes.wrapper].join(' ')}>
                <Header />
                <MainNavigation />
                <Outlet />
                <Footer />
            </section>
        </>
    );
};
