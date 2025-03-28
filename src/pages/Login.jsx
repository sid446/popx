import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='h-screen w-screen flex justify-center '>
        <div className='w-[28%] h-full bg-[#FFFFFF] border-2 border-[#D9D9D9] pt-8 px-5'>
        <h1 className='text-3xl font-bold mb-4'>Sign in to your <br /> PopX Account</h1>
        <span className='text-zinc-400 font-semibold mt-3'>
                <p>Lorem ipsum dolor sit amet setem,<br/>consectetur adipisicing elit egrtem.</p>
             </span>
        <div className='flex flex-col gap-4 mt-8'>
        <h1 className='text-[#AA84FD] text-sm font-semibold absolute top-[12rem] left-[36.6rem] px-3 bg-white'>Email Address</h1>
        <h1 className='text-[#AA84FD] text-sm font-semibold absolute top-[15.4rem] left-[36.6rem] px-3 h-[1rem] bg-white'>Password</h1>
        <input placeholder='Enter email address' className=" border-2 w-full h-[2.5rem] rounded-lg px-3 text-sm" type="text" />
        <input placeholder='Enter password' className=" border-2 w-full h-[2.5rem] rounded-lg px-3 text-sm" type="text" />
        <Link 
                to="/account" 
                className='bg-[#CBCBCB] h-[3rem] text-white font-semibold py-3 px-4 rounded 
                           transition duration-300 ease-in-out 
                           
                           active:scale-95 
                           transform 
                           focus:outline-none 
                           focus:ring-2 
                           focus:ring-purple-500 
                           focus:ring-opacity-50
                           text-center
                           hover:bg-zinc-500'    
             >
                Login
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Login