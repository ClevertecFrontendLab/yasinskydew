import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';

import { store } from '~/store/configure-store.ts';
import theme from '~/theme';

import Home from './app/pages/Home/Home';
import MenuRecipeList from './app/pages/MenuRecipeList/MenuRecipeList';
import Juiciest from './app/pages/NewRecipes/Juiciest';
import { PageLayout } from './components/Layout/PageLayout';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<PageLayout />}>
                            <Route path='/' element={<Home />} />
                            <Route path='/juiciest' element={<Juiciest />} />
                            <Route
                                path='/menu/:categoryId/:subCategoryId'
                                element={<MenuRecipeList />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
