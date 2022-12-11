import React, { useState } from 'react'
import logo from './shoes/logo.png';

import {Link } from 'react-router-dom'

import './ShoePage.css';


import blue from './shoes/chuck.png'
import red from './shoes/chuck2.png'
import pink from './shoes/chuck3.png'
function Chuck(){

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
                    <h1 class="productTitle"> CONVERSE <br/> CHUCK TAYLORS </h1>
                    <h2 class="productprice"> Rs 4,999 </h2>
                    <p class="productDes" >Chuck 70 with durable 12oz vintage canvas in new Earthy, optimistic colors. An elevated style icon, it features lightweight cushioning to keep you lookingâ€”and feelingâ€”good all day.</p>
                
            <div class="procolors" >
                <div class="col chuck" style={{border : select==='first' ? '3px solid black ' : ''}} onClick={()=>{setSelected('first');setJoota(blue)}} ></div>
                <div class="col chuck" style={{border : select==='second' ? '3px solid black ' : ''}} onClick={()=>{setSelected('second');setJoota(pink)}}></div>
                <div class="col chuck" style={{border : select==='third' ? '3px solid black ' : ''}} onClick={()=>{setSelected('third');setJoota(red)}}></div>
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

export default Chuck;