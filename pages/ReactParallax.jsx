import Image from 'next/image';
import React from 'react';
import reactParallax from '../public/assets/ProjectItem/reactParallax.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';



const ReactParallax = () => {
    return (
      <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={reactParallax}
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'> Parallax</h2>
            <h3> React JS / Parallax </h3>
          </div>
        </div>
  
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>Is a simple web page with a button in the middle of the page, if you click on the button you go to the bottom and if you click again, you go back to the top. The parallax effect comes in play when the background is moving, so you can see the effect, scrolling with mouse or clicking in the button.
              This simple technique is interesting, because you can apply it in almost any kind of interaction on a regular web site.
              Recently I experimented with building a content slider (or carousel, if thats your fancy) using React. I wanted to create some unique position-based cursor effects when the user hovers over the active slide. This eventually led to the parallax effect you’ll see in the final demo.
              This post will dive into the details of the sliders components, the dynamic CSS variables used for the parallax , and some of the other properties that brought this project to life.To create this project I am going to use React, Typescript and tailwind. Tailwind is a CSS library that use utility-first fundamentals, which we can use to quickly style our project.
            </p>
            <a
              href='https://github.com/samik1234/react_parallax'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a
              href='https://github.com/samik1234/react_parallax'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4'>Code</button>
            </a>
  
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> HTML
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Tailwind
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> React JS
                </p>
               
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Github 
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> CSS
                </p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    );
  };
  
  export default ReactParallax;