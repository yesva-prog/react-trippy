import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
function Service() {
  return (
    <div>
     <Navbar />
    
     <Hero
      cName="hero-mid"
      heroImg="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      title="Service"
      text=" "
      
      btnClass="hide"
     />
     <Trip />
     <Footer />
    </div>
  )
}

export default Service
