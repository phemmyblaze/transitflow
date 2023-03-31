/* eslint-disable */
import React from 'react'
import stlye from './Testimonial.css'
import smith from '../../image/smith.png'
import martins from '../../image/martins.png'
import quote from '../../image/quote.png'
import Star from '../../image/Star.png'

const Testimonial = () => {
  return (
    <div className='test'>
        <div className='testimonial-details'>
            <div className="testimonial-heading">
                <div className='sub-title'>
                    <h6>Testimonial</h6>
                </div>

                <div className='title'>
                    <h1>what our customer say</h1>
                    

                    <div className='title-arr'>
                        <div className='arr'>
                            &larr;
                        </div>
                        <div className='arr arr2'>
                            &rarr;
                        </div>
                    </div>
                </div>

                <div className='testimonial-profile'>
                    <div className='testimonial-desc'>
                        <div className='customer'>
                            <div className='customer-info'>
                                <img src={smith} alt="smith" />

                                <div className="customer-details">
                                    <h4>kathleen smith</h4>
                                    <h6>fuel company</h6>
                                </div>
                            </div>

                            <div className='quote'>
                                <img src={quote} alt="quote" />
                                
                            </div>
                        </div>

                        <div className='customer-text'>
                            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>

                        <div className='rate'>
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                        </div>
                    </div>
                    <div className='testimonial-desc desc2'>
                    <div className='customer '>
                            <div className='customer-info cust'>
                                <img src={martins} alt="smith" />

                                <div className="cust-details ">
                                    <h4>John Martins</h4>
                                    <h6>Restoration Company</h6>
                                </div>
                            </div>

                            <div className='quote'>
                                <img src={quote} alt="quote" />
                                
                            </div>
                        </div>

                        <div className='cust-text'>
                            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                        </div>

                        <div className='rate'>
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial