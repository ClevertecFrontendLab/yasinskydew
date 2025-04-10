import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';

import { store } from '~/store/configure-store.ts';

import Home from './app/pages/Home/Home';
import MenuRecipeList from './app/pages/MenuRecipeList/MenuRecipeList';
import Juiciest from './app/pages/NewRecipes/Juiciest';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/juiciest' element={<Juiciest />} />
                        <Route path='/menu/:categoryId' element={<MenuRecipeList />} />
                        <Route
                            path='/menu/:categoryId/:subCategoryId'
                            element={<MenuRecipeList />}
                        />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
