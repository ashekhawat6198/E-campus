import { endPoints } from "../apis";
import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { setloading, setToken } from "../../slices/authSlice";

const {
    LOGIN_API,

}=endPoints



export function login(userName, password, navigate){
     return async (dispatch)=>{
          const toastId=toast.loading("Loading...")
          dispatch(setloading(true));

          try{
            const response = await apiConnector("POST", LOGIN_API, {
                userName,
                password,
              });

              if (!response.data.success) {
                throw new Error(response.data.message);
              }

              toast.success("Login Successful");
              console.log(response);
              dispatch(setToken(response.data.token));
              localStorage.setItem("token", JSON.stringify(response.data.token));
              navigate("/dashboard");

          }catch(err){
            console.log("Login API Error......", err);
            toast.error("Login Failed");
          }
          dispatch(setloading(false));
          toast.dismiss(toastId);
     }
}