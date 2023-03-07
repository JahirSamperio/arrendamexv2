import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

import { Provider } from 'react-redux';
import { store } from './redux/store/store'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App></App>
);