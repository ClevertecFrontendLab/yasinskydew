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
import { AppStateProvider } from './context';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);

const store = setupStore();

const App = () => {
    return (
        // <React.StrictMode>
        <Provider store={store}>
            <AppStateProvider>
                <HashRouter>
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route path='/' element={<MainPage />} />
                            <Route path='/books' element={<MainPage />} />
                            <Route path='/books/:category' element={<MainPage />} />
                            <Route path='/terms' element={<UseTermsPage />} />
                            <Route path='/offer' element={<OfferPage />} />
                            <Route path='/account' element={<MainPage />} />
                        </Route>
                        <Route element={<PageLayout />}>
                            <Route path='/books/:category/:id' element={<BookPage />} />
                        </Route>
                    </Routes>
                </HashRouter>
            </AppStateProvider>
        </Provider>
        // </React.StrictMode>
    );
};

root.render(<App />);
