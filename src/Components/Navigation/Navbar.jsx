import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100 font-Overpass font-bold text-VeryDarkBlue lg:px-32">
  <div className="flex-1">
  <img className="w-18 h-6" src='/src/assets/logo.svg' />
    
    <ul className="menu menu-horizontal hidden lg:flex px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className='navbar-end hidden lg:flex'>
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end ">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="/src/assets/icon-close.svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> 
      <ul tabIndex={0} className="menu   dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-sm w-52">
      <li tabIndex={0} className=''>
        <details>
          <summary>Product</summary>
          <ul className="p-2">
            <li className=''><a className='after:bg-LightRed'>History</a></li>
            <li><a>Our team</a></li>
            <li><a>Blog</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Company</summary>
          <ul className="p-2"> 
            <li><a>History</a></li>
            <li><a>Our team</a></li>
            <li><a>Blog</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Connect</summary>
          <ul className="p-2">
            <li><a>History</a></li>
            <li><a>Our team</a></li>
            <li><a>Blog</a></li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar