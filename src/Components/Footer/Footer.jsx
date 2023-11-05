import React from "react";

function Footer() {
  return (
    <div className="w-full relative rounded-tr-[8rem] lg:flex-row lg:items-start lg:px-40 lg:py-10 text-lg text-White font-Overpass flex flex-col items-center py-8 bg-VeryDarkBlackBlue">
      <img className="w-24 h-10 my-8" src="src/assets/logo.svg" />
      
      <div className="w-1/2  flex flex-col items-center">
        <h1 className="pb-6 pt-8 font-bold">Product</h1>
        <ul className="text-center text-GrayishBlue  leading-8">
          <li className="hover:underline">Overview</li>
          <li className="hover:underline" >Pricing</li>
          <li className="hover:underline">Marketplace</li>
          <li className="hover:underline">Features</li>
          <li className="hover:underline">Integrations</li>
        </ul>
      </div>
      <div className="w-1/2  flex flex-col items-center">
        <h1 className="pb-6 pt-8 font-bold">Company</h1>
        <ul className="text-center text-GrayishBlue leading-8">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Team</li>
          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Careers</li>
        </ul>
      </div>
      <div className="w-1/2  flex flex-col items-center">
        <h1 className="pb-6 pt-8 font-bold">Connect</h1>
        <ul className="text-center text-GrayishBlue leading-8">
          <li className="hover:underline">Contact</li>
          <li className="hover:underline">Newsletter</li>
          <li className="hover:underline">Linkedin</li>
        </ul>
        
      </div>

      <div className="flex flex-col montserrat-500 text-center lg:text-sm text-xs text-AlmostBlack-50  pt-10 lg:py-5 lg:pl-5 lg:absolute lg:left-0 lg:bottom-0">
        <div>
        Challenge by <a className="underline text-super-dark-cyan" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        </div>
        <div>Coded by <a className="underline italic" href="https://github.com/CalderonCodes">Christopher Calderon</a>.</div>
        </div>
    </div>
  );
}

export default Footer;
