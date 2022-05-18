import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth)
  }
    return (
        <div>
       <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid " style={{padding: '0px 60px'}}>
    <a class="navbar-brand" href="#">Todo App</a>
    
    <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to='/' class="nav-link active " aria-current="page" href="#">Login</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/todo' class="nav-link" href="#">Todo</NavLink>
        </li>
       {
user &&
<li onClick={logOut} class="nav-item">
<a href="#">Sign Out</a>
</li>
       }
       
        
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;