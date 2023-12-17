import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
     <Navbar />
     <Hero
      cName="hero-mid"
      heroImg="https://media.istockphoto.com/id/479555618/photo/knocking-on-heavens-door.jpg?s=612x612&w=0&k=20&c=B0DKu58xWPuhOHsXiEIHlyTRbe1d7GDifV5nyuf90hE="
      title="Contact"
      text=" "
      
      btnClass="hide"
     />
     <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
