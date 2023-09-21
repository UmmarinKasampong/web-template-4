import React , {useEffect, useState} from 'react'
import './navbar.css'
const navbar = () => {
    const [Cburger , setCBurger] = useState('');
    const [Cick , setClick ] = useState(true);
    const Openbar = document.getElementById('sub-menu');

    const hamburgerClick =()=> {
        if(Cick){
            setClick(false)
            setCBurger('fa-times')
            Openbar.style.display = 'flex';
        }else {
            setClick(true)
            setCBurger('fa-bars')
            Openbar.style.display = 'none';
        }

    }

    useEffect(()=>{
        setCBurger('fa-bars');
    },[])
  return (
    <>
        <div className="border-top"></div>
        <div className='navbar'>
            <div className="navbar-container">
                <div className="nav-logo">
                    <h2><span className='first-text'>Tro</span><span className='secound-text'>Weld</span></h2>
                </div>

                <ul className="nav-menu">
                    <li><a href="#">
                        <div className="icon-box">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                       
                         <span>Location</span>
                    </a></li>

                    <li>
                        <a href="#">
                            <div className="icon-box">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                           
                            <span>Call: +01 1234567845655</span>
                       
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon-box">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                           
                            <span>demo@gmail.com</span>
                            
                        </a>
                    </li>
                    <li>
                        <div className="nav-menu-social">
                            <i class="fa fa-facebook-square"></i>
                            <i class="fa fa-twitter-square"></i>
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-twitter"></i>
                        </div>
                    </li>


                </ul>

                <div className="bar-menu">
                    <a onClick={()=> hamburgerClick() }>
                        <i class={`fa ${Cburger}`} aria-hidden="true"></i>

                    </a>
                </div>
            </div>

            <ul className='sub-menu' id='sub-menu'>
                <li><a href="">home</a></li>
                <li><a href="">service</a></li>
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

           

        </div>
    </>

  )
}

export default navbar