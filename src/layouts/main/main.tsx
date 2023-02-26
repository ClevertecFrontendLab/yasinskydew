import { Header } from '../../pages/header/header';
import { MainNavigation } from '../../components/main-navigation/main-navigation';
import { Footer } from '../../pages/footer/footer';
import { Outlet } from 'react-router-dom';
import classes from './main-layout.module.scss';
import { FC } from 'react';
import { categoryAPI } from '../../services/category-service';
import { Loader } from '../../components/ui/loader/loader';
import Error from '../../components/ui/error/error';
export const MainLayout: FC = () => {
    const { data, error, isLoading } = categoryAPI.useFetchAllCategoriesWithCountQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });
    const categories = data?.categories || [];
    const books = data?.books || [];

    return (
        <>
            <section className={[classes.mainLayout, classes.container, classes.wrapper].join(' ')}>
                <Header />
                {isLoading && <Loader />}
                {error && <Error error={'Error'} />}
                {!isLoading && !error && <MainNavigation categories={categories} navDisplayNone={false} />}
                {!isLoading && !error && <Outlet context={{ books }} />}
                <Footer />
            </section>
        </>
    );
};
