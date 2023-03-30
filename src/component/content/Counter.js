/* eslint-disable */
import React from 'react'
import style from './Counter.css'
import icon from '../../image/counter-img.png'
import line from '../../image/Line.png'


const Counter = () => {
  return (
    <div className="counter">
        <div className='counter-details'>
            <div className='counter1'>
                <h4>1294</h4>

                <img src={icon} alt="icon"/>

                <p>Delivered Packages</p>

            </div>
            <div className='kry'>
                <img src={line} alt="icon"/>
            </div>
            <div className='counter1 counter2'>
                <h4>3594</h4>

                <img src={icon} alt="icon"/>

                <p>Satisfied Clients</p>

            </div>
        </div>
    </div>
  )
}

export default Counter