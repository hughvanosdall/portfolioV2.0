import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';



const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div name='home' className='w-full h-screen bg-[#36454F]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='font-bold text-[#48ABA9]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          HUGH VANOSDALL
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#48ABA9]'>
          Front-End Web Devloper
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I specialize in web and game development, building first-class virtual experiences.
        </p>
        <div>
          <button onClick={handleClickScroll} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#48ABA9] hover:border-[#48ABA9]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
