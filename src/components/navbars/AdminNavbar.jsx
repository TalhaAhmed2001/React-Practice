import React from 'react'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/' className='nav-link'>Pending Profiles</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>Student Promotions</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AdminNavbar