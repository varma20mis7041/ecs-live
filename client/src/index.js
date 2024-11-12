import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
       <BrowserRouter>
        
            <App />
       </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// Service Worker registration
serviceWorker.register();
