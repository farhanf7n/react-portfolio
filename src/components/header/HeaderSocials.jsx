import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/farhanf7n/" targe="_blank"><BsLinkedin/></a>
        <a href="https://github.com/farhanf7n" targe="_blank"><BsGithub /></a>
        <a href="https://twitter.com/FarhanF7n" targe="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials