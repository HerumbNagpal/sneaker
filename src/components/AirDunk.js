import React, { useState } from 'react'
import logo from './shoes/logo.png';

import {Link } from 'react-router-dom'



import black from './shoes/dunk.png'
import red from './shoes/dunk2.png'
import white from './shoes/dunk3.png'
function AirDunk(){

    const ShoePage = {
        backgroundColor : 'white',
        backgroundImage : 'none'
    }

    const [select,setSelected] = useState('zero')
    const [num,setNum] = useState('zero')
    const [joota,setJoota] = useState(black);
  return(
  <>

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
                    <h1 class="productTitle">NIKE AIR DUNKS</h1>
                    <h2 class="productprice"> Rs 10,000 </h2>
                    <p class="productDes" >Shift into casual mode with the Air Jordan 1.Rich with iconic hoops heritage, the wardrobe staple steps up its game with GORE-TEX material and buttery nubuck leather overlays.A reflective Swoosh shines along the sides.</p>
                
            <div class="procolors" >
                <div class="col dunks" style={{border : select==='first' ? '3px solid black ' : ''}} onClick={()=>{setSelected('first');setJoota(black)}} ></div>
                <div class="col dunks" style={{border : select==='second' ? '3px solid black ' : ''}} onClick={()=>{setSelected('second');setJoota(white)}}></div>
                <div class="col dunks" style={{border : select==='third' ? '3px solid black ' : ''}} onClick={()=>{setSelected('third');setJoota(red)}}></div>
            </div>
            <div class="prosizes">
                <div class="size" style={{border : num==='42' ? '3px solid black ' : ''}} onClick={()=>setNum('42')} >42</div>
                <div class="size" style={{border : num==='43' ? '3px solid black ' : ''}} onClick={()=>setNum('43')} >43</div>
                <div class="size" style={{border : num==='44' ? '3px solid black ' : ''}} onClick={()=>setNum('44')} >44</div>
            </div>
            <button class="probuy">BUY NOW</button>
            </div>
        </div>
        
  </>
)}

export default AirDunk;