import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return <>

        <div className="flex gap-2 bg-slate-200 mb-2 shadow-sm justify-between">

            <div>
                <Link to="/" className="inline-block p-4 hover:bg-slate-600 hover:text-white">
                    Home
                </Link>

                <Link to="/about" className="inline-block p-4 hover:bg-slate-600 hover:text-white">
                    About
                </Link>

                <Link to="/contact" className="inline-block p-4 hover:bg-slate-600 hover:text-white">
                    Contact
                </Link>
            </div>

            <div>
                <Link to="/login" className="inline-block p-4 hover:bg-slate-600 hover:text-white">
                    Login
                </Link>
            </div>

        </div>

    </>
}

export default Nav