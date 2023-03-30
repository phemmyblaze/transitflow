/* eslint-disable */
import React from 'react' 
import style from './Project.css'
import zealand from '../../image/air_newzeland.png'
import lady from '../../image/ladyinstore.png'
import delivery from '../../image/deliveryicon.png'
import money from '../../image/money_icon.png'

const Project = () => {
  return (
    <div className='pro'>
        <div className='project-details'>
            <div className='project-text'>
                <div className='project'>
                    <div className='project-desc'>
                        <div className='sub-title'>
                            <h6>Why Us</h6>
                        </div>
                        
                        <div className='title'>
                            <h2>We provide full range global logistics solution</h2>
                        </div>
                        
                        <div className='desc'>
                            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 

                            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>

                        <div className='project-type'>
                            <img src={delivery} alt="icon"/>

                            <h3>Delivery on Time</h3>
                        </div>
                        <div className='project-type'>
                            <img src={money} alt="icon"/>

                            <h3>Optimized Travel Cost</h3>
                        </div>
                        
                    </div>
                    <div className='project-img'>
                        <div className='zealand'>
                            <img src={zealand} alt="icon"/>
                        </div>
                        <div className='lady'>
                            <img src={lady} alt="lady"/>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project