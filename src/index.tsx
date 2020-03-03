import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './pages';
import {BrowserRouter} from "react-router-dom";

render(
    <BrowserRouter>
        <div className={'container'} style={{height: '100%'}}>
            <App/>
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);
