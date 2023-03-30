/* eslint-disable */
import React from 'react'
import style from './Service.css'
import seaicon from '../../image/seaicon.png'
import air from '../../image/airfeight.png'
import ware from '../../image/warehouse.png'
import transport from '../../image/transport.png'

const Service = () => {
  return (
    <div className='service-section'>
        <div className='service'>
          <div className='service-heading'>
            <div className='sub-heading'>
            <h6>What we do</h6>
            </div>
            
            <div className='heading'>
              <h2>
                Safe & Reliable Cargo Solutions
              </h2>
            </div>
           
          </div>

          <div className='service-details'>
            <div className='service-type'>
              <div className='service-type-detail'>
                <img src={seaicon} alt="seaicon"/>

                <div className='service-text'>
                  <h2>Sea Transport Services</h2>

                  <p>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
              </div>
              <div className='service-type-detail'>
                <img src={air} alt="seaicon"/>

                <div className='service-text'>
                  <h2>Air Fright Services</h2>

                  <p>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
              </div>
                
            </div>
            <div className='service-type'>
              <div className='service-type-detail'>
                <img src={ware} alt="seaicon"/>

                <div className='service-text'>
                  <h2>Warehousing Services</h2>

                  <p>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
              </div>
              <div className='service-type-detail'>
                <img src={transport} alt="seaicon"/>

                <div className='service-text'>
                  <h2>Local Shipping Services</h2>

                  <p>Following the quality of our service thus having gained trust of our many clients.</p>
                </div>
              </div>
                
            </div>
          </div>

        </div>
    </div>
  )
}

export default Service