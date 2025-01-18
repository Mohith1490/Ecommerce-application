import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./redux/store.ts"
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx'
import Cart from './cart/Cart.tsx';
import SignInPage from './components/SignInPage.tsx';
import SignUpPage from './components/SignUpPage.tsx';
import ItemDetails from './components/ItemDetails.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="265180626070-rv1i57p0b7eb2ecivdn0dnmrugvmsisa.apps.googleusercontent.com">

      <Provider store={store} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/details/' element={<Cart />} />
            <Route path='/api/auth/signin' element={<SignInPage />} />
            <Route path='/api/auth/signup' element={<SignUpPage />} />
            <Route path='/details/:id' element={<ItemDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

