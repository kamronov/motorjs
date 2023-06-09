import React from 'react'
import logo from '../../assets/img/logo1.png'
import './Header.scss'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <div className="header_up_line"></div>
        <header>
                <nav>
                    <ul className='header__list container'>
                        <li className='header__item'>
                            <Link to='/'>
                                <img src={logo} alt="logo" />
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to='/'>Startseite</Link>
                        </li>
                        <li className='header__item'>
                           <a href="#De">Dienstleistungen</a>
                        </li>
                        <li className='header__item'>
                            <a href="#Co">Kontakt</a>
                        </li>
                        <li className='header__item'>
                            <Link to='/'>Kontaktformular</Link>
                        </li>
                    </ul>
                </nav>
        </header>
        <div className="header_bottom_line">
        </div>
        <div className="header__red_line"></div>
    </div>
  )
}

export default Header