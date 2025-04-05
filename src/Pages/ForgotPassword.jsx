import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetpasswordtoken } from '../services/operations/auth';
function ForgotPassword() {


    const [loading,setLoading]=useState(false);
    const [emailSent,setEmailsent]=useState(false);
    const [username,setusername]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();


  
    
    function submitHandeler(e){
       e.preventDefault();
       console.log("hello")
       console.log(username)
        dispatch(resetpasswordtoken(username,setEmailsent))
    }
   
    return (
    <div className=' h-[625px] bg-black  w-[100%] pt-4'>
        {
            loading ? (<div>Loading....</div>)
            :
             !emailSent ?  
             <div className='w-[30%] mx-auto pr-2  text-white rounded-md '>
             <p className='text-[29px] h-fit font-semibold'>Reset Your Password</p>
             <p className=' mt-3 text-slate-300'>Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery.</p>
             <form className='mt-7 flex flex-col font-serif' onSubmit={submitHandeler}>
                <label>
                    <p className=' text-lg font-semibold'>USERNAME<span className=" text-red-700 text-xl">*</span></p>
                    <input type='text' name='username'  required className=' w-full  rounded-md bg-white pl-2 text-black outline-none text-xl  font-normal h-[36px] mt-1' placeholder='Username' onChange={(e)=>setusername(e.target.value)}  value={username}/>
                   
                </label>
                <button className='bg-[#019D91] px-6 text-[#FFFFFF] text-lg  rounded-md cursor-pointer font-medium mt-3 py-2' type='submit'>SUBMIT</button>
             </form>

            <div className='flex mt-4 items-center gap-1 cursor-pointer' onClick={()=>navigate("/")}>
                <FaArrowLeft/>
                <p>Back to Login</p>
            </div>
         </div>
         :
         <div className=' mt-[8rem] w-[30%] mx-auto h-fit pr-5'>
                  <p className='text-[29px] h-fit font-semibold text-white'>Check Email</p>
                  <p className='mt-2 text-slate-300'>{`We have sent the reset email id to your registered email to this username.`}</p>
                  <button className='bg-[#019D91] py-2 px-3 rounded-md  text-white font-bold w-[98%] text-xl mt-5 ' onClick={submitHandeler}>Resend Email</button>
                  <div className='flex mt-3 items-center gap-x-2 cursor-pointer' onClick={()=>navigate("/login")}>
                  <FaArrowLeft />
                    <p>Back to login</p>
                  </div>
                </div>
        }
    </div>
  )
}

export default ForgotPassword