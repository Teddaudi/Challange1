import React from 'react'
import './Navbar.css'
import Logo from '../images/logo.svg'
import {BsCalendarEvent} from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import {RiCalendarTodoLine} from 'react-icons/ri'
import {AiOutlineBell} from 'react-icons/ai'
import {PiClockCountdownFill} from 'react-icons/pi'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <nav>
                <ul>
                    <div className='nav'>
                        <li>


                            <div class="dropdown">
                                <a>Features <BiChevronDown /></a>

                                <div class="dropdown-content" style={{justifyContent:'center'}}>
                                    <a><RiCalendarTodoLine size={20}/>Todo List</a>
                                    <a><BsCalendarEvent size={20}/>Calender</a>
                                    <a><AiOutlineBell size={20}/>Reminders</a>
                                    <a><PiClockCountdownFill size={20}/>Planning</a>
                                </div>
                            </div>

                        </li>
                        <li >
                            <div class="dropdown">
                                <a>Company <BiChevronDown /></a>
                                <div class="dropdown-content">
                                    <a>History</a>
                                    <a>Our Team</a>
                                    <a>Blog</a>

                                </div>
                            </div>
                        </li>
                        <li >
                            <a>Careers</a>
                        </li>
                        <li >
                            <a>About</a>
                        </li>
                    </div>
                    <div className='logins'>
                        <li>
                            <a>Login</a>
                        </li>
                        <li className='register'>
                            <a>Register</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

