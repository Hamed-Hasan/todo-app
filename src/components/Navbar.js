import React from 'react';


const Navbar = () => {
    return (
        <div>
       <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid " style={{padding: '0px 60px'}}>
    <a class="navbar-brand" href="#">Todo App</a>
    
    <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;