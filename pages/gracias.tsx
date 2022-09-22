import React from 'react'
import FooterAds from "../components/footer-ads";
import NavbarAds from "../components/atoms/navbar-ads";




const Thanks = () => {
  return (
    <div
      id="gracias"
      className="flex flex-col font-Inter text-bone bg-bone w-screen h-screen "
    >
      <NavbarAds />
      <div className="bg-bone h-screen">
        <div className="mx-auto max-w-3xl py-20 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-5xl mb-10 text-black font-bold text-Inter">
            <span className=" block text-5xl">Gracias</span>
            <span className="block text-5xl">por contactar!</span>
          </h2>
          <p className="mt-4 text-xl leading-6 text-gray-700">
            Hemos recibido tus datos satisfactoriamente y nos pondremos en
            contacto contigo lo antes posible.
          </p>
        </div>
      </div>
      <FooterAds />
    </div>
  );
}
export default Thanks
