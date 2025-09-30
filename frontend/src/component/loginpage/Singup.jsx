import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import image from '../../assets/loginimage.png'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import axios from "axios"



export function SingUP(){
  const {register,handleSubmit ,formState:{errors}}=useForm();
  const [retailer,setretailer]=useState(false);
  const [shopkeeper,setshopkeeper]=useState(false);
    function onSubmit(data){

      const role=shopkeeper?"shopkeeper":"Retailer";
      console.log(data,role);

      const payload={
        name:data.name,
        email:data.email,
        mobileNumber:data.number,
        BuyerType:role==="shopkeeper",
        Address:data.adress,
        gstNumber:data.gstnumber,
        creditLimit:data.limit==="yes"?1:0
      }

      axios.post("http://localhost:4000/api/v1/user/register",payload,{
        headers:{
          "Content-Type":"application/json"
        }
      }).then(()=>{
        alert("user register successfully")
      }).catch(err=>{
        alert("server is not responding")
        console.log(err);
      });
      
    }
    
    
  return(
    <>
       <div className="w-full flex justify-center items-center flex-col">
        <div className='h-20 w-full flex items-center justify-center md:hidden'>
          <img src={logo} alt="logo" className='h-full md:ml-6 ml-3' />
        </div>
        <div className="w-[90%] h-screen flex justify-center items-start md:items-center">
          <div className='h-[90%] w-1/2 md:flex hidden'>
          {/* imgae section */}
            <div className='h-full w-full bg-contain bg-no-repeat bg-center '
            style={{backgroundImage:`url(${image})`}}>
            </div>
          </div>
          <div className=' md:w-1/2 w-full flex justify-center items-start'>
          {/* form handling */}
            <form onSubmit={handleSubmit (onSubmit)} className='w-full h-[90%] flex flex-col justify-center mb-4 md:mt-16 mt-6 '>
              {/* name */}
              <div>
                <label htmlFor="name" className='font-semibold text-lg'>Name</label>
                <br />
                <input {...register("name",{required:true})}
                className=' px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none'
                id='name' 
                placeholder='Enter name'/>
                {errors.name && <p className='text-[15px] text-red-600'>Name is required</p>}
              </div>
              {/* Number */}
              <div className='mt-4'>
                <label htmlFor="number" className='font-semibold text-lg'>Mobile Number</label>
                <br />
                <input {...register("number",{required:true})}
                className=' px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none'
                id='number' 
                placeholder='Enter Number'/>
                {errors.number && <p className='text-[15px] text-red-600'>Number is required</p>}
              </div>
              {/* mail */}
              <div className='mt-4'>
                <label htmlFor="email" className='font-semibold text-lg'>Email(Optional)</label>
                <br />
                <input {...register("email",{required:false})}
                className=' px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none'
                id='email' 
                placeholder='Enter Email'/>
                {/* {errors.name && <p className='text-[5px] text-red-600'>Number is required</p>} */}
              </div>
              {/* type */}
              <div className='mt-4 h-10 w-full md:w-[90%] flex rounded-lg'>
                <div className={`h-full w-1/2 flex justify-center items-center cursor-pointer border-r-2 border-black rounded-l-lg hover:bg-[#489fb5] transition-all duration-300 ${retailer ? 'bg-[#489fb5] text-white' : 'bg-[#b0d3e1]'}`} onClick={() => {
                  setretailer(true);
                  setshopkeeper(false);
                }}>
                  <h3 className='text-sm md:text-lg'>Retail/Individual</h3>
                </div>
                <div className={`h-full w-1/2 flex justify-center  items-center cursor-pointer rounded-r-lg hover:bg-[#489fb5] transition-all duration-300 ${shopkeeper?'bg-[#489fb5] text-white':'bg-[#b0d3e1]'}`} onClick={()=>{setshopkeeper(true);setretailer(false);}}>
                  <h3 className='text-sm md:text-lg'>Shopkeeper</h3>
                </div>
              </div>
              {/* after choose a role */}
              {
                retailer && (
                  <div className='w-full flex flex-col justify-center'>
                    <div className='mt-4'>
                      <label htmlFor="adress" className='font-semibold text-lg'>Adress</label>
                      <br />
                      <input {...register("adress",{required:true})}
                      className=' px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none'
                      id='adress' 
                      placeholder='Enter Street name'/>
                      {errors.adress && <p className='text-[5px] text-red-600'>adress is required</p>}
                    </div>
                    <div className='mt-4'>
                      <label className='font-semibold text-lg'>Need Credit Limit</label>
                      <div className="flex items-center gap-4 mt-2">
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            value="yes"
                            {...register("limit", { required: true })}
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            value="no"
                            {...register("limit", { required: true })}
                          />
                          No
                        </label>
                      </div>
                      {errors.limit && (
                        <p className='text-[10px] text-red-600'>This field is required</p>
                      )}
                    </div>
                  </div>
                )
              }
              {
                shopkeeper && (
                  <div className='w-full flex flex-col justify-center'>
                    <div className='mt-4'>
                      <label htmlFor="adress" className='font-semibold text-lg'>Adress/Shop name</label>
                      <br />
                      <input {...register("adress",{required:true})}
                      className=' px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none'
                      id='adress' 
                      placeholder='Enter Street name'/>
                      {errors.adress && <p className='text-[5px] text-red-600'>adress is required</p>}
                    </div>
                    <div className='mt-4'>
                      <label htmlFor="GSTnumber" className='font-semibold text-lg'>GST number(optional)</label>
                      <br />
                      <input {...register("gstnumber",{required:false})}
                      className=' px-2 border border-black w-full md:w-[90%] mt-1 h-10 md:h-8 rounded-lg outline-none'
                      id='adress' 
                      placeholder='Enter GST number'/>
                      {/* {errors.gstnumber && <p className='text-[5px] text-red-600'>adress is required</p>} */}
                    </div>
                    <div className='mt-4'>
                      <label className='font-semibold text-lg'>Need Credit Limit</label>
                      <div className="flex items-center gap-4 mt-2">
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            value="yes"
                            {...register("limit", { required: true })}
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            value="no"
                            {...register("limit", { required: true })}
                          />
                          No
                        </label>
                      </div>
                      {errors.limit && (
                        <p className='text-[10px] text-red-600'>This field is required</p>
                      )}
                    </div>
                  </div>
                )
              }
              <div>
                <button type='Submit' className='w-full md:w-[90%] bg-[#489fb5] h-9 text-white mt-6 rounded-lg'>Login</button>
              </div>
              <div>
                <Link to='/loginpage'>
                  <p className='text-sm text-center mt-2'>Have an account?</p>
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}