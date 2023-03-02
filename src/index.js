import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { FavoritesProvider } from './contexts/favoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesProvider>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </FavoritesProvider>


);
