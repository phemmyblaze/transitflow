/* eslint-disable */
import React from 'react'
import Logo from '../../image/transitflow.png'
import clock from '../../image/clock.png'
import email from '../../image/email.png'
import phone from '../../image/phone.png'
import style from './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className="nav-heading">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>

                <div className='nav-details'>
                    <div className='clock'>
                        <img src={clock} alt="Logo"/>

                        <div className='clock-details'>
                            <p>Mon-Sat: 9:00 - 18:00</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                <div className='nav-details'>
                    <div className='clock'>
                        <img src={email} alt="Logo"/>

                        <div className='clock-details'>
                            <p>Email</p>
                            <p>contact@logistics.com</p>
                        </div>
                    </div>
                </div>
                <div className='nav-details'>
                    <div className='clock'>
                        <img src={phone} alt="Logo"/>

                        <div className='clock-details'>
                            <p>Call us</p>
                            <p>(00) 112 365 489</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar