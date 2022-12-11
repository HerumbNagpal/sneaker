
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';



import logo from './logo.png';

import './Head.css';
import './MainPage.css'; 

import s1 from './shoes/aj1.png';
import s2 from './shoes/af.png';
import s3 from './shoes/yb.png';
import s4 from './shoes/ct.png';
import s5 from './shoes/panda.png';

import ship from './features/ship.png';
import ret from './features/return.png';
import contact from './features/contact.png';
import giftcard from './features/giftcard.png';

import ig from './features/ig.png';
import linkedin from './features/linkedin.png'

function Head(){
  
  let history = useHistory();
  
  const [shoe,setShoe] = useState({
    transform : `translateX(-00vw)`
  })

  const handleShoe = (event)=>{
    
    let index = event.target.id * -100;
    console.log(index);
    
    setShoe({
      transform:`translateX(${index}vw)`
    })
  }

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"> <img className='logo' src= {logo} alt="" /> </Link>
            
            <div className="collapse navbar-collapse" id="navba₹upportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                 <span className='non'>NON </span> <span className='veg' > VEG</span>
                </li>
                <li className="nav-item">
                <marquee> <span>THE SALE IS LIVE</span> </marquee>
                </li>
                
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>

           
        </nav>
        <div className="sale bg-dark">
                
                <h3 className='menuItem' id = '0' onClick={(e)=>handleShoe(e)} >AIR JORDAN</h3>
                <h3 className='menuItem' id = '1' onClick={(e)=>handleShoe(e)} >AIR FORCE</h3>
                <h3 className='menuItem' id = '2' onClick={(e)=>handleShoe(e)} >CHUCK TAYLOR</h3>
                <h3 className='menuItem' id = '3' onClick={(e)=>handleShoe(e)} >YEEZY</h3>
                <h3 className='menuItem' id = '4' onClick={(e)=>handleShoe(e)} >AIR DUNKS</h3>
            </div>

            <div className='bgShoe'>
            <div className="slider" style={shoe} >
            <div className="sliderItem">
                <img src={s1} alt="" className="sliderImg" />
                <h1 className="sliderTitle"> Air Jordan </h1>
                <h3 className="sliderPrice"> ₹ 23,000 </h3>
                <button className="sliderBuy" onClick={()=>{ history.push('/jordans') }} > BUY NOW </button> 
                
            </div>
            <div className="sliderItem">
                <img src={s2} alt="" className="sliderImg" />
                <h1 className="sliderTitle"> Air Force </h1>
                <h3 className="sliderPrice"> ₹ 9,000 </h3>
                <button className="sliderBuy" onClick={()=>{ history.push('/airforce') }} > BUY NOW </button>
            </div>
            <div className="sliderItem">
                <img src={s4} alt="" className="sliderImg" />
                <h1 className="sliderTitle"> Chuck Taylor </h1>
                <h3 className="sliderPrice"> ₹ 4,999 </h3>
                <button className="sliderBuy"  onClick={()=>{ history.push('/chucktaylor') }} > BUY NOW </button>
            </div>
            <div className="sliderItem">
                <img src={s3} alt="" className="sliderImg" />
                <h1 className="sliderTitle"> Yeezy </h1>
                <h3 className="sliderPrice"> ₹ 25,000 </h3>
                <button className="sliderBuy" onClick={()=>{ history.push('/yeezy') }} > BUY NOW </button>
            </div>
            <div className="sliderItem">
                <img src={s5} alt="" className="sliderImg" />
                <h1 className="sliderTitle"> Air Dunks </h1>
                <h3 className="sliderPrice"> ₹ 9,999 </h3>
                <button className="sliderBuy" onClick={()=>{ history.push('/airdunk') }} > BUY NOW </button>
            </div>
            
        </div>
        </div>

        <div className="features" >
          <div className="feature">
              <img src={ship}   alt=""/>
              <span className="featureheading"> FREE SHIPPING </span>
              <span className="featuredes" > Free shipping on all orde₹ </span>
          </div>
          <div className="feature">
              <img src= {ret}   alt=""/>
              <span className="featureheading"> 30 DAYS RETURN </span>
              <span className="featuredes" > Easy return and refund within 2 days </span>
          </div>
          <div className="feature">
              <img src={giftcard}   alt=""/>
              <span className="featureheading" > GIFT CARDS </span>
              <span className="featuredes" > Use coupons and gift cards </span>
          </div>
          <div className="feature">
              <img src={contact}  alt=""/>
              <span className="featureheading" > CONTACT </span>
              <span className="featuredes" > 880091XXXX <br /> herumbn@gmail.com </span>
          </div>
        </div>


        <footer>
        
        <div className="brands">
            <p className="genral brand"> SKETCHERS </p>
            <p className="genral brand"> PUMA </p>
            <p className="genral brand"> VANS </p>
            <p className="genral brand"> NEW BALANCE </p>
        </div>
        
        <div className="types">
            <p className="genral"> FIND A STORE </p>
            <p className="genral"> STUDENT DISCOUNTS </p>
            <p className="genral"> BECOME A MEMBER </p>
        </div>

        <div className="help">
            <p className="genral hlp"> Order Status </p>
            <p className="genral hlp"> About Us </p>
            <p className="genral hlp"> Contact Us </p>  
        </div>

        

        <div className="contacts">
            <div className="socials">
                <a href="https://www.instagram.com/herumb_nagpal/" > <img src={ig} width="40" alt=""/> </a>
                <a href="https://www.linkedin.com/in/herumb-nagpal-a37b94192/"> <img src={linkedin} width="40" alt=""/> </a>
            </div>
            <div className="mail">
                <img src="./features/cr.png" width="20"  alt=""/> <p className="email"> Herumb Nagpal </p>

            </div>
        </div>

    </footer>
        
      </>
    )
  }
  
  export default Head;