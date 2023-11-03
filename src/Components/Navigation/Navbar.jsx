import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-transparent font-Overpass font-bold lg:flex text-White pt-8  px-5 lg:px-32">
  <div className="flex-1">
  <img className="w-24 h-10" src='/src/assets/logo.svg' />
    
    <ul className="menu menu-horizontal hidden lg:flex px-10">
      <li tabIndex={0}>
        <details>
          <summary className='hover:text-White '>Product</summary>
          <ul className="p-2 text-VeryDarkBlue rounded-md">
          <li className=''><a className=''>History</a></li>
            <li><a>Overview</a></li>
            <li><a>Pricing</a></li>
            <li><a>Marketplace</a></li>
            <li><a>Features</a></li>
            <li><a>Integrations</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className='hover:text-White '>Company</summary>
          <ul className="p-2 text-VeryDarkBlue rounded-md">
          <li><a>About</a></li>
            <li><a>Team</a></li>
            <li><a>Blog</a></li>
            <li><a>Careers</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className='hover:text-White '>Connect</summary>
          <ul className="p-2 text-VeryDarkBlue rounded-md">
          <li><a>Contact</a></li>
            <li><a>Newsletter</a></li>
            <li><a>Linkedin</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className='navbar-end hidden lg:flex'>
  <button className="btn btn-ghost normal-case rounded-full px-10 text-base ">Login</button>
      <button className="btn bg-White normal-case rounded-full px-9 text-base font-Ubuntu text-LightRed">Sign up</button>
  </div>
  
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end  ">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="/src/assets/icon-close.svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> 
      <ul tabIndex={0} className="menu  text-VeryDarkBlue  dropdown-content mt-3 z-[1] p-2 py-5 shadow bg-base-100 rounded-sm w-64 items-center">
      <li tabIndex={0} className=''>
        <details>
          <summary>Product</summary>
          <ul className="p-2">
            <li className=''><a className=''>History</a></li>
            <li><a>Overview</a></li>
            <li><a>Pricing</a></li>
            <li><a>Marketplace</a></li>
            <li><a>Features</a></li>
            <li><a>Integrations</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Company</summary>
          <ul className="p-2 "> 
            <li><a>About</a></li>
            <li><a>Team</a></li>
            <li><a>Blog</a></li>
            <li><a>Careers</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Connect</summary>
          <ul className="p-2">
            <li><a>Contact</a></li>
            <li><a>Newsletter</a></li>
            <li><a>Linkedin</a></li>
          </ul>
        </details>
      </li>
      <div className="divider"></div> 
      <button className="btn btn-ghost normal-case rounded-full px-10 text-base ">Login</button>
      <button className="btn bg-hero-pattern normal-case rounded-full px-9 text-base font-Ubuntu text-White">Sign up</button>
      </ul>
      
    </div>
  </div>
</div>
  )
}

export default Navbar