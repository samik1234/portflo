import Image from 'next/image';
import React from 'react';
import bb from '../public/assets/ProjectItem/bb.jpeg';
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
            src={bb}
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Bumble -Post App</h2>
            <h3>MERN Stack </h3>
          </div>
        </div>
  
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p> Bumble! Built with Next.js, this post app allows users to create and share posts with friends and family. With its intuitive design and easy-to-use features, Bumble makes it easy to stay connected with the people you care about.
            </p>
            <a
              href='https://bumble-next-app.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a
              href='https://github.com/samik1234/bumble-next-app'
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
                  <RiRadioButtonFill className='pr-1' /> Firebase
                </p>
               
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> React Native
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Tailwind
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
