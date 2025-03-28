import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
   return (
     <div className='w-screen h-screen flex justify-center'>
         <div className='w-[28%] h-full bg-[#FFFFFF] border-2 border-[#D9D9D9] flex flex-col justify-end p-6'>
             <h1 className='text-3xl font-bold'>Welcome To PopX</h1>
             <span className='text-zinc-400 font-semibold mt-3'>
                <p>Lorem ipsum dolor sit amet setem,<br/>consectetur adipisicing elit egrtem.</p>
             </span>
             <Link 
                to="/register" 
                className='bg-[#6C25FF] h-[3rem] text-white font-semibold py-3 px-4 rounded mt-8 
                           transition duration-300 ease-in-out 
                           hover:bg-[#5A1FD6] 
                           active:scale-95 
                           transform 
                           focus:outline-none 
                           focus:ring-2 
                           focus:ring-purple-500 
                           focus:ring-opacity-50'
             >
                Create Account
             </Link>
             <Link 
                to="/login" 
                className='bg-[#CEBAFB] h-[3rem] text-black font-semibold py-3 px-4 rounded mt-4 mb-4
                           transition duration-300 ease-in-out 
                           hover:bg-[#BEA4F2] 
                           active:scale-95 
                           transform 
                           focus:outline-none 
                           focus:ring-2 
                           focus:ring-purple-200 
                           focus:ring-opacity-50'
             >
                Already Registered? Login
             </Link>
         </div>
     </div>
   )
}

export default Home