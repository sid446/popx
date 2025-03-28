import React from 'react'
import logo from '../assets/logo.png'

function Account() {
   return (
     <div className='w-screen h-screen flex justify-center items-center bg-white'>
         <div className='w-[28%] border-2 border-[#D9D9D9] h-full flex flex-col '>
              <div className='w-full px-6 pt-4'>
             <h1 className='text-2xl font-semibold text-[#1D2226] mb-6'>Account Settings</h1>
             </div>
             <div className='bg-zinc-100 w-full h-full'>
             <div className='w-full border-dashed border-b-2 border-[#D9D9D9] p-6'>
             <div className='flex items-center mb-6 '>
                 <div className='relative'>
                     <img 
                         src={logo}
                         alt="Profile" 
                         className='w-20 h-20 rounded-full object-cover'
                     />
                     <div className='absolute bottom-0 right-0 bg-[#6C25FF] text-white rounded-full w-6 h-6 flex items-center justify-center'>
                         <svg 
                             xmlns="https://xd.adobe.com/8790becd-347c-4741-b644-7eeb35da4637" 
                             width="16" 
                             height="16" 
                             viewBox="0 0 24 24" 
                             fill="none" 
                             stroke="currentColor" 
                             strokeWidth="2" 
                             strokeLinecap="round" 
                             strokeLinejoin="round"
                         >
                             <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                             <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                         </svg>
                     </div>
                 </div>
                 
                 <div className='ml-4'>
                     <h2 className='text-[15px] font-bold'>Marry Doe</h2>
                     <p className='text-[14px]  text-[#1D2226]'>Marry@Gmail.Com</p>
                 </div>
             </div>
             
             <p className='text-[#1D2226] text-[14px] font-semibold'>
                Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Elrmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
             </p>
             </div>
             </div>
         </div>
     </div>
   )
}

export default Account