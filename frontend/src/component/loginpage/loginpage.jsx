import React from 'react';
import {useForm} from 'react-hook-form';
import image from '../../assets/loginimage.png'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
export function Loginpage(){
  const {register,handleSubmit ,formState:{errors}}=useForm();
  function onSubmit(data){
    console.log(data);
  }
   return(
    <>
      <div className="w-full flex justify-center items-center flex-col">
          <div className='h-20 w-full flex items-center justify-center md:hidden'>
                    <img src={logo} alt="logo" className='h-full md:ml-6 ml-3' />
                  </div>
        <div className="w-[90%] md:h-screen flex justify-center items-center">
          <div className='h-[90%] w-1/2 md:flex hidden'>
          {/* imgae section */}
            <div className='h-full w-full bg-contain bg-no-repeat bg-center '
            style={{backgroundImage:`url(${image})`}}>
            </div>
          </div>
          <div className=' md:w-1/2 w-full flex justify-center items-start'>
          {/* form handling */}
            <form onSubmit={handleSubmit (onSubmit)} className='w-full h-[90%]  flex flex-col justify-center mb-4 md:mt-16 mt-6'>
              <div>
                <label htmlFor="name" className='font-semibold text-xl'>Mobile Number</label>
                <br />
                <input {...register("Number",{required:true})}
                className=' px-2 border border-black md:w-[90%] w-full mt-1 h-10 md:h-8 rounded-lg outline-none'
                id='name' 
                placeholder='Enter Number'/>
                {errors.Number && <p className='text-[5px] text-red-600'>Number is required</p>}
              </div>
              <div>
                <button type='Submit' className='md:w-[90%] w-full bg-[#489fb5] h-10 md:h-8 text-white mt-6 rounded-lg'>Genrate OTP</button>
              </div>
              <div>
                <Link to='/singuppage'>
                  <p className='text-sm text-center mt-2'> Don’t have an account?</p>
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
   )
}