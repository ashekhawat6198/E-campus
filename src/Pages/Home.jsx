import React, { useState } from 'react'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import {useDispatch} from "react-redux"
import { login } from '../services/operations/auth';
import Lottie from "lottie-react";
import loginAnim  from "../animations/LOGIN.json"
import {Link, Navigate, useNavigate} from "react-router-dom"

function Home() {


  const [formData,setFormData]=useState({
    userName:"",
    password:""
  })

 const navigate=useNavigate();
  const {userName,password}=formData;
  const dispatch=useDispatch();

  const [pass,setPass]=useState(false);
    

    const submitHandeler=(e)=>{
        e.preventDefault();

        dispatch(login(userName,password,navigate));

        setFormData({
          userName:"",
          password:""
        })

    }
     

    function changeHandeler(e){
     
        setFormData((prevData)=>({
          ...prevData,
          [e.target.name]:e.target.value
        })) 
    }

 
  return (
    <div className=' h-[625px] bg-black  w-[100%] pt-4'>

    <Lottie
     animationData={loginAnim}
      className="w-[440px] absolute right-6 top-8  "
    />
         
          <div className='w-[40%]   mx-auto rounded-md pb-1 border-white border-1' >
              <h2 className=' text-center text-white text-[50px] font-serif'>VTOP Login</h2>
              <form className='w-[80%] mx-auto mt-5 flex flex-col gap-3 pb-4' onSubmit={submitHandeler}>
                <label className=' text-3xl text-[#FFFFFF] font-serif'>
                  <p>Username<span className=' text-red-700'>*</span></p>
                  <input type='text' placeholder='Username'  required className=' w-full bg-white  rounded-md pl-2 text-black outline-none text-2xl  font-normal h-[36px]' onChange={changeHandeler} value={userName} name='userName'/>
                </label>
                <label className=' text-3xl text-[#FFFFFF] font-serif relative'>
                  <p>Password<span className=' text-red-700'>*</span></p>
                  <input type={pass===false ? "password" : "text"} required placeholder='Password' className=' w-full bg-white  rounded-md pl-2  font-normal text-black outline-none text-2xl h-[36px]' onChange={changeHandeler} value={password} name='password'/>
                  {
                    pass===false ? 
                     <FaEye className=' text-black top-10 cursor-pointer right-4 absolute' onClick={()=>setPass(!pass)}/>
                     :
                     <FaEyeSlash className=' text-black top-10 cursor-pointer right-4 absolute'  onClick={()=>setPass(!pass)}/>
                  }
                </label>


                <button className='bg-[#019D91] px-6 text-[#FFFFFF] text-lg  rounded-md font-medium mt-4 py-2 cursor-pointer' type='submit'>SUBMIT</button>
              </form>
                
                <Link to="/forgotpassword">
               <button className='text-white ml-[66%] font-serif text-xl cursor-pointer'>Forgot Password</button>
               </Link>
          </div>
         
    </div>
  )
}

export default Home