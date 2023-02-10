import { Header } from '../../pages/header/header';
import { MainNavigation } from '../../components/main-navigation/main-navigation';
import { Footer } from '../../pages/footer/footer';
import { Outlet } from 'react-router-dom';
import classes from './main-layout.module.scss';
import { Dispatch, FC } from 'react';

export interface LayoutState {
  isMenuOpen: boolean;
}
export interface LayoutContextI {
  layoutState: LayoutState;
  setLayoutState: Dispatch<any>;
}
export const MainLayout: FC<LayoutContextI> = ({ layoutState, setLayoutState }) => {
  return (
    <>
      <section className={[classes.mainLayout, classes.container, classes.wrapper].join(' ')}>
        <Header layoutState={layoutState} setLayoutState={setLayoutState} />
        <MainNavigation layoutState={layoutState} setLayoutState={setLayoutState} />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};
