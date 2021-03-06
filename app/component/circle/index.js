import React from 'react'

export default ({ type }) =>
  type === 'dark' 
    ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="circle">    
      <defs>
        <linearGradient id="circle-a" x1="0%" y1="0%" y2="0%">
          <stop offset="0%" stopOpacity=".05"/>
          <stop offset="100%" stopOpacity=".45"/>
        </linearGradient>
        <linearGradient id="circle-b" x1="13.325%" y1="75.509%" y2="0%">
          <stop offset="0%" stopOpacity=".05"/>
          <stop offset="100%" stopOpacity=".45"/>
        </linearGradient>
        <linearGradient id="circle-c" x1="33.586%" y1="76.034%" y2="0%">
          <stop offset="0%" stopOpacity=".05"/>
          <stop offset="100%" stopOpacity=".45"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx="500" cy="500" r="500" fill="currentColor"/>
        <path fill="url(#circle-a)" d="M500,1000 C776.142375,1000 1000,776.142375 1000,500 C666.666667,500 500,500 500,500 C500,564 500,730.666667 500,1000 Z"/>
        <path fill="url(#circle-a)" d="M1.59161573e-12,500 C276.142375,500 500,276.142375 500,0 C166.666667,0 1.59161573e-12,0 1.59161573e-12,0 C1.59161573e-12,64 1.59161573e-12,230.666667 1.59161573e-12,500 Z" transform="rotate(180 250 250)"/>
        <path fill="url(#circle-b)" d="M500,500 C776.142375,500 1000,276.142375 1000,0 C666.666667,0 500,0 500,0 C500,64 500,230.666667 500,500 Z" transform="matrix(1 0 0 -1 0 500)"/>
        <path fill="url(#circle-c)" d="M0,1000 C276.142375,1000 500,776.142375 500,500 C166.666667,500 0,500 0,500 C0,564 0,730.666667 0,1000 Z" transform="matrix(-1 0 0 1 500 0)"/> 
      </g>
    </svg>
  : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="circle">
    <defs>
      <linearGradient id="semicircle" x1="50%" x2="50%" y1="0%" y2="97.943%">
        <stop offset="0%" stopOpacity=".05"/>
        <stop offset="100%" stopOpacity=".25"/>
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx="500" cy="500" r="500" fill="currentColor"/>
      <path fill="url(#semicircle)" d="M500,1000 C776.142375,1000 1000,776.142375 1000,500 C666.666667,500 500,500 500,500 C500,564 500,730.666667 500,1000 Z"/>
      <path fill="url(#semicircle)" d="M1.41442413e-13,500 C276.142375,500 500,276.142375 500,-1.53477231e-12 C166.666667,-1.53477231e-12 1.13686838e-13,-1.53332241e-12 1.13686838e-13,-1.53042263e-12 C1.13686838e-13,64 1.22938696e-13,230.666667 1.41442413e-13,500 Z" transform="rotate(180 250 250)"/>
    </g>
  </svg>
