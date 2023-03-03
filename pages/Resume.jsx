import React from 'react';
import Head from 'next/head';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';




const Resume = () => {
    return (
        <>
          <Head>
            <title>Samiksha | Resume</title>
            <meta
              name='description'
              content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
            />
            <link rel='icon' href='/fav.png' />
          </Head>
    
          <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
            <h2 className='text-center'>Resume</h2>
            <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
              <h2 className='text-center'>Samiksha Wankhade</h2>
              <div className='flex'>
                <a
                  href='https://linkedin.com/in/samikshawankha'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                </a>
                <a
                  href='https://github.com/samik1234'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub size={20} style={{ marginRight: '1rem' }} />
                </a>
              </div>
            </div>
            <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
              <div className='hidden sm:block'>
                <p>
                  Reliable <span className='px-1'>|</span> Web Development{' '}
                  <span className='px-1'>|</span> Methodical
                </p>
              </div>
              <div className='block sm:hidden'>
                <p> Leadership</p>
                <p className='py-2'>Adaptive</p>
                <p>Complex Problem Solving</p>
              </div>
            </div>
            <p>
              Analytical, innovative, and motivated web development professional.
            
              Adept at developing strategies and driving streamlined
              operations. Diverse analytical skills, team collaboration, and
              relationship building. Consummate professional, and motivated leader,
              with solid interpersonal abilities and complex problem-solving skills.
              Effective and proven track record of critical thinking, idea
              generation, and optimizing efficiencies.
            </p>
    
            {/* Skills */}
            <div className='text-center py-4'>
              <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
              <p className='py-2'>
                <span className='font-bold'>Technical Skills</span>
                <span className='px-2'>|</span>Front-End Web Developer
                <span className='px-2'>|</span> HTML
                <span className='px-2'>|</span>CSS
                <span className='px-2'>|</span>Javascript
                <span className='px-2'>|</span>React
                <span className='px-2'>|</span>Next JS
                <span className='px-2'>|</span>Github
                <span className='px-2'>|</span>Node Js
                <span className='px-2'>|</span>Graphql
                <span className='px-2'>|</span>Tailwind
                <span className='px-2'>|</span> Firebase
                <span className='px-2'>|</span> Netlify
              </p>
              <p className='py-2'>
                <span className='font-bold'>Masters Degree of Computer Application</span>
                <span className='px-2'>|</span> Aspiring Front-End Web Developer
                
              </p>
            </div>
    
            <h5 className='text-center underline text-[18px] py-4'>
              ACADEMIC QUALIFICATION
            </h5>
            {/* Experience */}
            <div className='py-6'>
              <p className='italic'>
                <span className='font-bold italic'>
                Masters Of Computer Application
                </span>
                <span className='px-2'>|</span>Savitribai Phule Pune University,Maharashtra


              </p>
              <p className='py-1 italic'>ASMA Institute Of Management (2021 - 2022)</p>
              <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                <li>
                  Ensured comprehensive mobile responsive UI layouts with
                  understanding of HTML, CSS, and JavaScript.
                </li>
                <li>
                  Troubleshoot issues and concerns, configure operation and analytic
                  plugins, and design changes as needed.
                </li>
                <li>
                
                  Computer Science- 9.21 CGPA
                </li>
                <li>
                  In 2021 I started “Web  Development Course”, focused on
                  sharing what I’m learning in web development, specifically
                  front-end development.
                </li>
              </ul>
            </div>
    
    
            {/* Personal Experience */}
            <div className='py-6'>
              <p className='italic'>
                <span className='font-bold italic'>
                  Bachelor Of Computer Application
                </span>
                <span className='px-2'>|</span> Sant Gadge Baba Amravati University

              </p>
              <p className='py-1 italic'> Degree College of Physical Education H.V.P.M, Amravati
(2017 - 2020)</p>
              <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
               <li>
                Marks - 06.26 CGPA
               Grade - A
               </li>
               
               <div className='py-6'>
                <p className='italic'>
                <span className='font-bold italic'>
                  Higher Secondary School Board 
                </span>
                <span className='px-2'>|</span> Sant Gadge Baba Amravati Board
</p>
<li>
  Computer Science Faculty - 55.85%
  
</li>


<p className='italic'>
                <span className='font-bold italic'>
               Secondary School Board 
                </span>
                <span className='px-2'>|</span> Sant Gadge Baba Amravati Board
</p>
<li>
  
    79.80%
</li>
</div>


              </ul>
            </div>
    
            {/*  */}
            <h5 className='text-center underline text-[18px] py-4'>
              Other Professional Experience/ Certification
            </h5>
          
            {/* Experience */}
            <div className='py-6'>
              <p className='italic'>
                <span className='font-bold'>The Fundamentals of Digital Marketing</span>
                <span className='px-2'>|</span>Google Certified, 
              </p>
              <p className='py-1 italic'>Digital Marketing Course (2022 – No Expiration Date)</p>
              <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
              
              
              </ul>
              <p className='italic'>
                <span className='font-bold'>Google Ads Search Certification</span>
                <span className='px-2'>|</span>Google Certified, 
              </p>
              <p className='py-1 italic'>Digital Academy (Skillshop) (Issued- Aug 2022 – Expires- Aug 2023)</p>
              <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
              </ul>


            </div>
          </div>
        </>
      );
    };
    
    export default Resume;