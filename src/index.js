import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { CartProvider } from './contexts/cartContext';
import { FavoritesProvider } from './contexts/favoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <FavoritesProvider>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </FavoritesProvider>
    </CartProvider>
);
