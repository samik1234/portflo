import Image from 'next/image';
import React from 'react';
import reactSmooth from '../public/assets/ProjectItem/reactParallax.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';



const ReactSmooth = () => {
    return (
      <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={reactSmooth}
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Ai Image Generator</h2>
            <h3>MERN Stack </h3>
          </div>
        </div>
  
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>This application uses a combination of Machine Learning and React to generate images based on user input. It works by taking in user input, such as text or an image, and then using a deep learning model to generate a new image. The generated image is then displayed on the screen for the user to view.
            </p>
            <a
              href='https://sam-dalle-clone-2.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a
              href='https://github.com/samik1234/dalle-2.0'
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
                  <RiRadioButtonFill className='pr-1' /> Node Js
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Next Js
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Dalle-Ai
                </p>
               
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> OpenAi
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> MongoDB
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
  
  export default ReactSmooth;
