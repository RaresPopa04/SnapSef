import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import ChefPage from './pages/ChefPage';
import Test from './pages/test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/acasa" element = {<HomePage/>}/>
          <Route path = "/retete/:id" element = {<RecipePage/>}/>
          <Route path = "/chef/:id" element = {<ChefPage/>}/>
          <Route path = "/test" element = {<Test/>}/>

        </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
