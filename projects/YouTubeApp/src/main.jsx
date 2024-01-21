import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/configStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
   
   <Provider store={store}>

      <App />

   </Provider>,
);
