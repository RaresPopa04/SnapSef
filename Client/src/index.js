import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import ChefPage from './pages/ChefPage';
import Test from './pages/test';
import SavedRecipes from './pages/SavedRecipes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profil from './pages/Profil';
import AllRecipes from './pages/AllRecipes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/retete/:id" element = {<RecipePage/>}/>
          <Route path = "/chef/:id" element = {<ChefPage/>}/>
          <Route path='/calorii' element = {<h1>Calorii</h1>}/>
          <Route path='/gateste' element = {<h1>Calorii</h1>}/>
          <Route path='/salvate' element = {<SavedRecipes/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path = "/test" element = {<Test/>}/>
          <Route path = "/profil" element = {<Profil/>}/>
          <Route path = "/retete" element={<AllRecipes/>}></Route>

        </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
