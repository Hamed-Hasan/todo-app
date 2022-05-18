import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import NotFound from './components/Home/NotFound';
import RequireAuth from './components/Home/RequireAuth';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todo" element={
        <RequireAuth>
          <Home/>
        </RequireAuth>
      }/>
         <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
