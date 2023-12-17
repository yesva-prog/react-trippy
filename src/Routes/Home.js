import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
     <Navbar />
     <Hero
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      title="Your Journey Your Story"
      text="Choose Your Favorite Destination."
      buttonText="Travel plan"
      url="/"
      btnClass="show"
     />
     <Destination />
     <Trip />
     <Footer />
    </>
  )
}

export default Home
