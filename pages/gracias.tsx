import React from 'react'
import Logo from '../public/ecoges-logo.png'
import Image from 'next/image'




const Thanks = () => {
  return (
    <section
      id="gracias"
      className="flex flex-col text-bone bg-bone w-screen h-screen "
    >
      <nav className="flex justify-center bg-darkGreen ">
        <Image
          src={Logo}
          width={300}
          height={100}
          alt="logo"
          className="mx-auto"
        />
      </nav>
      <div className="flex flex-col border-4 border-gray-400 shadow-black shadow-lg
            rounded-xl w-max m-auto py-4 px-8 bg-white">
        <span className="capitalize flex justify-center text-black 
            font-Barlow font-black text-6xl mt-12 mb-8">
          GRACIAS
        </span>
        <span className="flex justify-center text-lg mb-10 font-Inter text-gray-500">
          Nos pondremos en contacto contigo lo antes posible.
        </span>
      </div>
    </section>
  );
}
export default Thanks
