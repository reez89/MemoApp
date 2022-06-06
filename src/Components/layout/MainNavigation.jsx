import React from 'react'
import {Link} from 'react-router-dom'
import mainNav from './MainNavigation.module.css';

const  MainNavigation = () => {
  return (
    <header className={mainNav.header}>
        <div className={mainNav.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorite'>My Favorite</Link>
                </li>
            </ul>
        </nav>
    </header>
  ) 
}

export default MainNavigation