import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = (props: NavbarProps) => {
  return (
    <>
      <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand d-flex align-items-center' href='#'>
            <img
              src='logo192.png'
              alt=''
              width='30'
              className='d-inline-block align-text-top me-2'
            />
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  to='/home'
                  className='nav-link'
                  activeClassName='active'
                  exact
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/albums'
                  className='nav-link'
                  activeClassName='active'
                  exact
                >
                  <span>Albums</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/users'
                  className='nav-link'
                  activeClassName='active'
                  exact
                >
                  <span>Users</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/todos'
                  className='nav-link'
                  activeClassName='active'
                  exact
                >
                  <span>Todos</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
