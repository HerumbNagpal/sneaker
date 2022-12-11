import React, { useState } from 'react'
import logo from './shoes/logo.png';

import {Link } from 'react-router-dom'

import './ShoePage.css';


import blue from './shoes/force.png'
import red from './shoes/force2.png'
import pink from './shoes/force3.png'
function AirForce(){

    const ShoePage = {
        backgroundColor : 'white',
        backgroundImage : 'none'
    }

    const [select,setSelected] = useState('zero')
    const [num,setNum] = useState('zero')
    const [joota,setJoota] = useState(blue);
  return(
  <>
  <div className='shoe'>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"> <img className='logo' src= {logo} alt="" /> </Link>
            
            <div className="collapse navbar-collapse" id="navba₹upportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                 <span className='non'>NON </span> <span className='veg' > VEG</span>
                </li>
                
                
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>

           
        </nav>

        <div style={ShoePage}>
            <img src={joota} alt="" className="productimg"/>
            <div class="productdetails">
                    <h1 class="productTitle"> AIR FORCE</h1>
                    <h2 class="productprice"> Rs 9,000s </h2>
                    <p class="productDes" >You can’t stop aging, but the Air Force 1 "Fresh" gets pretty close. Soft, textured leather helps conceal creasing and is easy to clean. The debossed branding, which replaces the woven labels, pairs with extra laces so you can eat that jelly doughnut in peace. And the perforated sockliner keeps it airy and breathable. Now, there's really no reason not to rock white-on-white.</p>
                
            <div class="procolors" >
                <div class="col force" style={{border : select==='first' ? '3px solid black ' : ''}} onClick={()=>{setSelected('first');setJoota(blue)}} ></div>
                <div class="col force" style={{border : select==='second' ? '3px solid black ' : ''}} onClick={()=>{setSelected('second');setJoota(pink)}}></div>
                <div class="col force" style={{border : select==='third' ? '3px solid black ' : ''}} onClick={()=>{setSelected('third');setJoota(red)}}></div>
            </div>
            <div class="prosizes">
                <div class="size" style={{border : num==='42' ? '3px solid black ' : ''}} onClick={()=>setNum('42')} >42</div>
                <div class="size" style={{border : num==='43' ? '3px solid black ' : ''}} onClick={()=>setNum('43')} >43</div>
                <div class="size" style={{border : num==='44' ? '3px solid black ' : ''}} onClick={()=>setNum('44')} >44</div>
            </div>
            <button class="probuy">BUY NOW</button>
            </div>
        </div>

        
        
        </div>
  </>
)}

export default AirForce;