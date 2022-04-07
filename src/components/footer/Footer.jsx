import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Farhan</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/farhanf7n/" targe="_blank"><BsLinkedin/></a>
        <a href="https://github.com/farhanf7n" targe="_blank"><BsGithub /></a>
        <a href="https://twitter.com/FarhanF7n" targe="_blank"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Farhan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer