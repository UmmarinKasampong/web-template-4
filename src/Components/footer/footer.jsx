import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <>

        <div className='footer-contents'>
            <div className="footer-container">
                <div className="footer-item">
                    <h1><span>Tro</span><span>Weld</span></h1>
                </div>

                <div className="footer-item">
                    <ul className='footer-menu'>
                        <li>
                            <h2>USEFUL LINK</h2>
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>About</a></li>
                                <li><a>Services</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </li>
                        <li>
                            <h2>WELDING</h2>
                            <ul>
                                <li><a>Lorem ipsum dolor sit amet,</a></li>
                                <li><a>consectetur </a></li>
                                <li><a>adipiscinaliquaLoreadipiscing</a></li>
                            </ul>
                        </li>
                        <li>
                            <h2>SOCIAL MEDIA</h2>
                            <ul>
                                <li><a> <i class="fa fa-facebook-square"></i></a></li>
                                <li><a><i class="fa fa-twitter-square"></i> </a></li>
                                <li><a> <i class="fa fa-facebook"></i></a></li>
                                <li><a><i class="fa fa-twitter"></i></a></li>
                                
                            </ul>
                        </li>
                        <li>
                            <h2>OUR WELDING CENTER</h2>
                            <ul>
                                <li><a>Lorem ipsum dolor sit amet,</a></li>
                                <li><a>consectetur </a></li>
                                <li><a>adipiscinaliquaLoreadipiscing</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="footer-item">
                    <ul className='footer-contact'>
                        <li>
                            <a href="#">
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <h2>Location</h2>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                        
                                <h2>Call +01 1234567890</h2>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                <h2>demo@gmail.com</h2>
                            </a>
                            
                        </li>
                        <li>
                            <form action="">
                                <input type="search" id='search' placeholder='Enter Your Email'/>
                                <input type="submit" value=">" />
                            </form>
                        </li>
                    </ul>
                </div>
        
            </div>
        </div>
        <div className="footer-end">
            <p>© 2023 All Rights Reserved By Free Html Templates</p>
        </div>

    </>
  )
}

export default footer