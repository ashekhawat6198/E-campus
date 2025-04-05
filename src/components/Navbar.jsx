import React from "react";
import img1 from "../images/logo/logo2.png"


function Navbar() {
    

//   const navigate=useNavigate();
//   const dispatch=useDispatch();

//    function logouthandeler(){
//      dispatch(logout(navigate))
//    }

//   const { token }=useSelector((state)=>state.auth)

  return (
    <div className="bg-black w-full h-[70px]">
      <div className=" w-[96%] h-full flex mx-auto items-center justify-between relative">
        <div className=" cursor-pointer ">
            <img src={img1} height={100} width={165} />
        </div>
       
       {/* {
           token !==null && 

          
           <button className=" absolute right-2 top-3 bg-[#019D91] px-6 text-[#FFFFFF] text-[22px] font-semibold py-1 rounded-md " onClick={logouthandeler}>Logout</button>
           
       } */}
     
      </div>
    </div>
  );
}

export default Navbar;
