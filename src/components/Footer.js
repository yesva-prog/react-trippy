import React from 'react'
import "./Footerstyle.css"
function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='top'>
            <div>
                <h1>Trippy</h1>
                <h1>Choose your favorite destination</h1>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">TroubleShooting</a>
                <a href="/">Contact US</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">privacy</a>
                <a href="/">License</a>
                <a href="/">Policy</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
