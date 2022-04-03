import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_72i6v0q', 'template_7j6hnfn', form.current, 'lJUdaQcvYFSLADE26')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
             <MdOutlineEmail className='contact__option-icon' />
             <h4>Email</h4>
             <h5>Farhanf7n@gmail.com</h5>
             <a href="mailto:farhanf7n@gmail.com" target="_blank">Send a message</a>
           </article>

           <article className="contact__option">
             <RiMessengerLine className='contact__option-icon' />
             <h4>Messenger</h4>
             <h5>idkfarhan</h5>
             <a href="https://m.me/farhanf7n" target="_blank">Send a message</a>
           </article>

           <article className="contact__option">
             <BsWhatsapp className='contact__option-icon' />
             <h4>Whatsapp</h4>
             <h5>+923091789249</h5>
             <a href="https://api.whatsapp.com/send?phone=+923091789249" target="_blank">Send a message</a>
           </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact