import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">George Gesite</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Computer & Software Engineer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a full-stack developer based in the Philippines, specializing in 
            building software for the web and mobile. I'm passionate about building 
            software that makes a difference in the world.
            <br />
            This is an example link{' '}
            <a
               href="https://youtube.com/fknight"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
            Press me
            </a>{' '}
            
         </p>
      </div>
   )
}

export default Intro;