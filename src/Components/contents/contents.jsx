import React, { useState } from 'react'
import { Swiper , SwiperSlide } from 'swiper/react';

import GoogleMapReact from 'google-map-react';



import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import './contents.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const contents = () => {


    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const [test , setTest ] = useState(1)
    let sildeDots = 1;
    const dotlist = document.getElementsByClassName('dot')

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };


    const currentDots =(n)=> {
        console.log("กดดดดดดดดดดดดดดดดดดด")
        activeSelect(sildeDots = n)
    }

    

    const activeSelect =(n)=> {
        var i;
        for(i = 0 ; i < dotlist.length ; i++){
            dotlist[i].className = dotlist[i].className.replace(" active" , "")

        }
        dotlist[sildeDots - 1].className += " active";
        setTest(sildeDots)
    
    }



    let all = ['p1.jpg','p2.jpg','p3.jpg','s1.png','s2.png','s3.png','s4.png','s5.png','s6.png'] 

    const Slidesshow =()=> {
        let title = test;
        console.log('Title ' + title)
        if(title === 'all' || title === 1){
            title = all;
        }else {
            var start;
            var end;
            if(title === 2){
                start = 0;
                end = 3;
            }else if(title === 3){
                start = 1
                end = 4
            }else if(title === 4){
                start = 2
                end = 5
            }else if(title === 5){
                start = 3
                end = 6
            }
            title = []

            for(start; start <= end ; start++){
                title.push(all[start]);
            }
            console.log("item list " + title)
        }
        let itemlist = title.map((item,index)=>{
            return <SwiperSlide key={index}>
                <img src={`../../assets/${item}`} alt={`${item}`} />
                </SwiperSlide>
        })

        return itemlist

    }
  return (
    <div className='main-contents'>
        <div className="introduce-contents">
            
            <div className="contents-container">
                <div className="contents-grid">
                    <div className="contents-item">
                        <h1><span>Welcome to </span><span>Troweld</span></h1>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has s</p>
                        <input type="submit" value='Read More' />
                    </div>

                    <div className="contents-item">
                        <div className="img">
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>



        <div className="portfolio-contents">
            <div className="contents-container">
                <div className="port-item">
                    <h1>Our Work Portfolio</h1>
                </div>

                <div className="port-item">
                    <ul>
                        <li className='dot active' onClick={() => currentDots(1)}><a>all</a></li>
                        <li className='dot' onClick={() => currentDots(2)}><a>decorative</a></li>
                        <li className='dot' onClick={() => currentDots(3)}><a>facades</a></li>
                        <li className='dot' onClick={() => currentDots(4)}><a>perforated</a></li>
                        <li className='dot' onClick={() => currentDots(5)}><a>railings</a></li>
                    </ul>
                </div>


            </div>

            <div className="port-item">
                    <Swiper 
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={true} 
                        modules={[Navigation , Autoplay]} 
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                    className="mySwiper" >
                        <div className="all" id='num'></div>
                        {Slidesshow()}
                        
                 
                    </Swiper>
                </div>
        </div>



        <div className="services-contents">
            <div className="contents-container">
                <div className="services-item">
                    <h1><span>Our </span><span>Services</span></h1>
                </div>

                <div className="services-item">
                    <div className="service-grid">
                        <div className="grid-item">
                            <img src="../../assets/s3.png" alt="test" />
                            <h2>Home Welding</h2>
                            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>

                        <div className="grid-item">
                            <img src="../../assets/s3.png" alt="test" />
                            <h2>Gate Welding</h2>
                            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>

                        <div className="grid-item">
                            <img src="../../assets/s3.png" alt="test" />
                            <h2>Window Welding</h2>
                            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>

                        <div className="grid-item">
                            <img src="../../assets/s3.png" alt="test" />
                            <h2>Machine Welding</h2>
                            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>

                        <div className="grid-item">
                            <img src="../../assets/s3.png" alt="test" />
                            <h2>Bike Welding</h2>
                            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>

                        <div className="grid-item">
                            <img src="../../assets/s3.png" alt="test" />
                            <h2>Car Welding</h2>
                            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                    
                </div>

                <div className="services-item">
                    <input type="submit" value="Read More" />    
                </div>
            </div>

        </div>



        <div className="map-contents">
            <div className="contents-container">
                <div className="map-item">
                    <h1><span>Get In </span><span>Touch</span></h1>
                </div>

                <div className="contents-grid">
                    <div className="map-item">
                        <form >
                            <input type="text" placeholder='Your name' />

                            <div className="form-flex">
                                <input type="text" placeholder='Phone Number' />
                                <input type="text" placeholder='Select Services' />
                            </div>

                            <input type="email" placeholder='Email' />


                            <textarea placeholder='Message'></textarea>

                            <input type="submit" value="send"/>

                        </form>
                    </div>


                    <div className="map-item">
                        <div style={{ height: '500px', width: '600px' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>

                </div>

              
            </div>
        </div>


        <div className="testimonial-contents">
            <div className="contents-container">
                <div className="testimonial-item">
                    <h1>Testimonial</h1>
                </div>

                <div className="testimonial-item">
                    <Swiper
           
                        pagination={{
                            clickable: true,
                            
                        }}
                        direction={'vertical'}
                        modules={[Pagination , Autoplay]}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <div className="sildes2-item">
                                <div className="sildes2-img">
                                    <img src="../../assets/images/client.jpg" alt="img1" />
                                    <h1>Alex Jonson</h1>
                                </div>
                           
                                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="sildes2-item">
                                <div className="sildes2-img">
                                    <img src="../../assets/images/client.jpg" alt="img1" />
                                    <h1>Alex Jonson</h1>
                                </div>
                           
                                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="sildes2-item">
                                <div className="sildes2-img">
                                    <img src="../../assets/images/client.jpg" alt="img1" />
                                    <h1>Alex Jonson</h1>
                                </div>
                           
                                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>

        </div>

    </div>
  )
}

export default contents