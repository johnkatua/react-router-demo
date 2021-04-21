import React, {useState} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Navbar = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = !!localStorage.getItem('token');

  const loginUser = () => {
    localStorage.setItem('token', 'login-token-set-by-you');
    history.push('/profile/john');
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <div
            role='button' 
            className={`navbar-burger burger ${isOpen && 'is-active'}`} 
            aria-label='menu'
            aria-expanded='false'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </div>
        </div>
        <div className={`navbar-menu ${isOpen && 'is-active'}`}>
          <div className='navbar-start'>
            <NavLink className='navbar-item' activeClassName='is-active' to='/'>
              Home
            </NavLink>
            <NavLink className='navbar-item' activeClassName='is-active' to='/about'>
              About
            </NavLink>
            <NavLink className='navbar-item' activeClassName='is-active' to='/profile'>
              Profile
            </NavLink>
            <NavLink className='navbar-item' activeClassName='is-active' to='/contact-us'>
              Contact us
            </NavLink>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                {!isAuth ? (
                  <button className='button is-white' onClick={loginUser}>Login</button>
                ): (
                  <button className='button is-black' onClick={logoutUser}>Logout</button>
                )}
                <button className='button is-white'>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default withRouter(Navbar);