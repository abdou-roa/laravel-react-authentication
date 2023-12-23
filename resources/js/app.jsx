import './bootstrap';

import { React} from 'react';
import ReactDom from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';
import { Provider } from 'react-redux';

import Auth from './auth/Auth';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Home from './components/home/Home';
import App from './srcApp';


import ProtectedRoute from './util/ProtectedRoute';





ReactDom.createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path='/auth' element={<Auth/>}>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                </Route>
                <Route path="/" element={<App />}>
                    <Route path='' element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
        
        <App/>
    </Provider>
);