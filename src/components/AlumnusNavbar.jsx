import React from 'react'
import {Link} from 'react-router-dom';

const AlumnusNavbar = () => {
  return (
    <>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/' className='nav-link'>Alumni</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>Stories</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>Advices</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>My Profile</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>log out</Link>
                    </li>
                </ul>
            </nav>
        </>
  )
}

export default AlumnusNavbar