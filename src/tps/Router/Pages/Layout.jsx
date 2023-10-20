import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav >
        <ul className='nav justify-content-center' style={{backgroundColor:"black"}}>
            <li className='nav-item'>
                <Link to='/home' className='nav-link'>home</Link>

            </li>
            <li className='nav-item'>
                <Link  to='/blogs' className='nav-link'> blogs</Link>
                
            </li>
            <li className='nav-item'>
                <Link  to='/contact' className='nav-link'>contact</Link>
               
            </li>
        </ul>
      </nav>
      <div className="container-fluid w-75 max-auto">
          <Outlet/>
      </div>
    </>
  )
}

export default Layout
