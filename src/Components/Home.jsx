import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div id='home' className='flex flex-col items-center justify-center w-full min-h-screen pt-20 bg-gray-900'>
      <div className='text-lg text-center text-white'>
        <p className='text-2xl font-semibold text-black'>.</p>
      </div>

      <div className='mt-10 text-center text-white'>
        <p className='text-xl font-semibold'>HELLO THERE, WELCOME TO MY SITE</p>
        <p className='text-4xl md:text-5xl'>I'm Harvinder Singh</p>
        <p className='text-xl md:text-2xl text-sky-400 typewriter'>A Front End Developer</p>
        <p className='text-xl md:text-2xl'>& UI/UX Designer</p>
      </div>

      <div className='flex flex-col items-center justify-center mt-5 space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
        <a href="public/Harvinder's new (1).pdf" target='_blank' className='w-full md:w-auto'>
          <button className='flex items-center justify-center w-full px-6 py-2 text-white border border-black rounded-full md:w-auto hover:shadow-lg hover:shadow-blue-400 bg-sky-900'>
            <FaRegFileAlt  /> View Resume
          </button>
        </a>

        <a aria-label="Chat on WhatsApp" href="https://wa.me/8699525447" target='_blank' className='w-full md:w-auto'>
          <button className='flex items-center justify-center w-full px-6 py-2 text-white bg-green-500 border border-black rounded-full md:w-auto hover:shadow-lg hover:shadow-green-400'>
            <BsWhatsapp className="mr-2" /> Chat on WhatsApp
          </button>
        </a>
      </div>

      {/* Uncomment and update the image section */}
      {/* <div className='flex justify-center mt-10'>
        <img id='photo' className='w-40 rounded-3xl mb-80 md:w-52 lg:w-64' src="src/assets/WhatsApp Image 2024-05-20 at 11.54.40 AM.jpeg" alt="Harvinder Singh" />
      </div> */}
    </div>
  );
};

export default Home;
