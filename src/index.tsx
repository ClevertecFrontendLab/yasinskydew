import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { OfferPage } from './pages/offer/offer-page';
import { UseTermsPage } from './pages/use-terms/use-terms-page';
import { Provider } from 'react-redux';

import './index.scss';
import { PageLayout } from './layouts/page/page';
import { MainLayout } from './layouts/main/main';
import { setupStore } from './store/store';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);

export interface MainState {
  isMenuOpen: boolean;
}

const store = setupStore();

const App = () => {
  const [state, setState] = useState<MainState>({
    isMenuOpen: false,
  });
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout layoutState={state} setLayoutState={setState} />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/terms' element={<UseTermsPage />} />
            <Route path='/offer' element={<OfferPage />} />
            <Route path='/account' element={<MainPage />} />
          </Route>
          <Route element={<PageLayout layoutState={state} setLayoutState={setState} />}>
            <Route path='/books/all/:id' element={<BookPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
    // </React.StrictMode>
  );
};

root.render(<App />);
