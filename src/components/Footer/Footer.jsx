import React from 'react'
import logo from '../../assets/img/logo1.png'
import { Link } from 'react-router-dom'
import './Footer.scss'
function Footer() {
  return (
    <div>
        <footer>
            <p className='footer__addres'>Gelsenkirchen, Horsterstr 106 45897</p>
            <Link> <img src={logo} alt="logo" /></Link>
            <span>Montag - Freitag 8 bis 18 Uhr</span>
        </footer>
    </div>
  )
}

export default Footer
