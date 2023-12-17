
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems'
import './Navbarstyle.css';

import React, { Component } from 'react'

export class Navbar extends Component {
    state ={clicked:false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
  render() {
    return (
        <div>
        <nav className='NavbarItems'>
           <h1 className='navbar-logo'>
               Trippy
           </h1>
            
             <div className='menu-icons' onClick={this.handleclick}>
               <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
             </div>
  
           <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item,index)=>{
                  return(
                      <li key={index}>
                      <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                  </li>
                  );
              })}
              <button>Sign Up</button>
           </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar

