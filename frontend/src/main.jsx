import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from "react-redux";
import {store} from './../src/redux/store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

       <BrowserRouter>
          <AppRouter />
       </BrowserRouter>

    </Provider>
    
  </React.StrictMode>
)

