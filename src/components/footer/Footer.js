import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <div className='footer'>
        <ul>
        <li><Link to="about" offset={-50} duration={500} >О центре</Link></li>
        <li><Link to="courses" offset={-50} duration={500} >Программы</Link></li>
        <li><Link to="socials" offset={-50} duration={500} >Контакты</Link></li>
        </ul>
        <p>Intellectual Kids © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer