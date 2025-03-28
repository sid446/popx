import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='h-screen w-screen flex justify-center  '>
        <div className='w-[28%] h-full bg-[#FFFFFF] border-2 border-[#D9D9D9] pt-8 px-5'>
        <h1 className='text-3xl font-bold mb-4'>Create your <br /> PopX Account</h1>
        
        <div className='flex flex-col gap-7 mt-8'>
        <h1 className='text-[#AA84FD] text-sm font-semibold absolute top-[8rem] left-[36.6rem] px-3 bg-white'>Full Name</h1>
        <h1 className='text-[#AA84FD] text-sm font-semibold absolute top-[12.4rem] left-[36.6rem] px-3 h-[1rem] bg-white'>Phone number</h1>
        <h1 className='text-[#AA84FD] text-sm font-semibold absolute top-[16.3rem] left-[36.6rem] px-3 h-[1rem] bg-white'>Email address</h1>
        <h1 className='text-[#AA84FD] text-sm font-semibold absolute top-[20.6rem] left-[36.6rem] px-3 h-[1rem] bg-white'>Password</h1>
        <h1 className='text-[#AA84FD] text-sm font-semibold absolute top-[25rem] left-[36.6rem] px-3 h-[1rem] bg-white'>Company name</h1>
        <input placeholder='Full Name' className=" border-2 w-full h-[2.5rem] rounded-lg px-3 text-sm" type="text" />
        <input placeholder='Enter phone number' className=" border-2 w-full h-[2.5rem] rounded-lg px-3 text-sm" type="text" />
        <input placeholder='Enter email address' className=" border-2 w-full h-[2.5rem] rounded-lg px-3 text-sm" type="text" />
        <input placeholder='Enter password' className=" border-2 w-full h-[2.5rem] rounded-lg px-3 text-sm" type="text" />
        <input placeholder='Enter company name' className=" border-2 w-full h-[2.5rem] rounded-lg px-3 text-sm" type="text" />
        <div className=''>
        <h1 className='text-sm'>Are you an Agency?</h1>
        <div className='flex gap-3'>
       <input className='w-[1.1rem] accent-[#6C25FF]' type="radio" name="" id="" />
         <label htmlFor="">Yes</label>
            <input className='w-[1.1rem] accent-[#6C25FF]' type="radio" name="" id="" />
            <label htmlFor="">No</label>
            </div>
        </div>

        <Link   
                to="/account" 
                className='bg-[#6C25FF] h-[3rem] w-[24rem] text-white font-semibold py-3 px-4 rounded 
                           transition duration-300 ease-in-out 
                           absolute 
                           bottom-8
                           active:scale-95 
                           transform 
                           focus:outline-none 
                           focus:ring-2 
                           focus:ring-purple-500 
                           focus:ring-opacity-50
                           text-center
                           hover:bg-purple-800'    
             >
                Create Account
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Register