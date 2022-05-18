import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todo" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
