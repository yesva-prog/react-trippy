import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Footer from '../components/Footer'
function About() {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero-mid"
      heroImg="https://media.istockphoto.com/id/1330558677/photo/kabukicho-shinjuku-at-night.jpg?b=1&s=170667a&w=0&k=20&c=bkLg5kNnM9L0k28KLa-_lo9Dity9r0-XzK6A89d2sYE="
      title="About"
      text=" "
      
      btnClass="hide"
     />
     <Aboutus />
     <Footer />
    </>
  )
}

export default About
