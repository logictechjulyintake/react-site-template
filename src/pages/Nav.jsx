import React from 'react'
import { Link } from 'react-router-dom'

import HomeImg from '../assets/img/home.png'
import AboutImg from '../assets/img/about.png'
import ContactImg from '../assets/img/contact.png'
import LoginImg from '../assets/img/login.png'

function Nav() {
    return <>

        <div className="flex gap-2 bg-slate-200 mb-2 shadow-sm justify-between">

            <div>
                <Link to="/" className="inline-flex p-4 hover:bg-slate-600 hover:text-white">
                    <img src={HomeImg} alt="home" className="h-5 relative top-[3px] mr-1" />
                    Home
                </Link>

                <Link to="/about" className="inline-flex p-4 hover:bg-slate-600 hover:text-white">
                    <img src={AboutImg} alt="home" className="h-5 relative top-[3px] mr-1" />
                    About
                </Link>

                <Link to="/contact" className="inline-flex p-4 hover:bg-slate-600 hover:text-white">
                    <img src={ContactImg} alt="home" className="h-5 relative top-[3px] mr-1" />
                    Contact
                </Link>
            </div>

            <div>
                <Link to="/login" className="inline-flex p-4 hover:bg-slate-600 hover:text-white">
                    <img src={LoginImg} alt="home" className="h-5 relative top-[3px] mr-1" />
                    Login
                </Link>
            </div>

        </div>

    </>
}

export default Nav