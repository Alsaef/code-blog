import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import  { Toaster } from 'react-hot-toast';
import { Helmet, HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <HelmetProvider>
    <Provider store={store}>
   <App />
   </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
