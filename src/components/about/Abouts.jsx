import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const Abouts = () => {
  return (
    <section id='about'>
      <h4>Get To Know</h4>
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="me" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Clients</h5>
              <small>100+ Worlwide</small>
            </article>

            <article className="about__card">
              <FiUsers  className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sunt non ipsum suscipit fugiat eius optio iste labore repellat, distinctio veritatis dolore magni esse temporibus adipisci maiores voluptatum minima illo.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  ) 
}

export default Abouts