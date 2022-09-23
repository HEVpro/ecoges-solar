import React from 'react'
import Logo from "../public/ecoges-logo.png";
import Image from "next/image";


const Form = () => {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <nav className="flex justify-center bg-darkGreen ">
        <Image
          src={Logo}
          width={300}
          height={100}
          alt="logo"
          className="mx-auto"
        />
      </nav>
      <form className='flex m-auto border-2 w-max p-10'>
        <div id='name' className="flex">
          <input type="text" />
          
        </div>
        <div id='email' className=""></div>
        <div id='country' className=""></div>
        <div id='address' className=""></div>
        <div id='city' className=""></div>
      </form>
    </div>
  );
}
export default Form
