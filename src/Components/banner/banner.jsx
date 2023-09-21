import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';






// css
import './banner.css'

const banner = () => {

   

      
  return (
    <div className='banner'>
        <div className="banner-container">
            <ul className='banner-nav'>
                <li><a href="">home</a></li>
                <li><a href="">services</a></li>
                <li><a href="">about</a></li>
                <li><a href="">portfolio</a></li>
                <li><a href="">contact us</a></li>
                <li>
                    <a href="">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <span>login</span>
                    </a>
                </li>
                <li><a href=""><i class="fa fa-search" aria-hidden="true"></i></a></li>
            </ul>
            <Swiper
                
                // spaceBetween={50}
                // slidesPerView={3}
                modules={[Autoplay ]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
           
              
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className="swiper-container">
                        <h1>We Build <br/>
                            The Things Architects <br/>
                            Dream Up</h1>
                        <div className="swiper-btn">
                            <input type="submit" value='Read More' />
                            <input type="submit" value='Contact Us' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-container">
                        <h1>We Build <br/>
                            The Things Architects <br/>
                            Dream Up</h1>
                        <div className="swiper-btn">
                            <input type="submit" value='Read More' />
                            <input type="submit" value='Contact Us' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-container">
                        <h1>We Build <br/>
                            The Things Architects <br/>
                            Dream Up</h1>
                        <div className="swiper-btn">
                            <input type="submit" value='Read More' />
                            <input type="submit" value='Contact Us' />
                        </div>
                    </div>
                </SwiperSlide>

               
            </Swiper>
        </div>
    </div>
  )
}

export default banner