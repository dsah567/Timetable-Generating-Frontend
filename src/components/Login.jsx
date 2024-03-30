import React from 'react'
import {Form,Navigate,redirect,useActionData,useSearchParams} from  "react-router-dom"
import axios from "axios"

export async function  loginAction({request}){
    let formData = await request.formData();
    try{
        let result =await  axios.post("/api/v1/users/login",{
            email:formData.get("email"),
            password:formData.get("password")
        })
        .then((res)=>{console.log(res.data)
             return window.location.href="/"}
            )
        .catch(function (error) {
            console.log("axios",error);
            return window.location.href="/login?invalidDetails=Invalid_User_Creditanls"
        });
        
    }
    catch(err){
        console.log(err);
        return window.location.href="/login?invalidDetails=Something_Went_Wrong"
    }
     
}

export default function Login() {
    let [searchParams, setSearchParams] = useSearchParams();
    let invalidDetails= searchParams.get("invalidDetails")
    console.log(invalidDetails);
    return (
        
        <div className=" bg-gradient-to-br from-purple-500 to-pink-500">

        <div className="flex justify-center items-center h-screen ">

        <Form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" >
        <div className="mb-4">
            {invalidDetails && <label className="block text-red-700 text-sm font-bold mb-2">{invalidDetails}</label> }
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Email</label>
            <input type="email" name="email" placeholder='Enter email or username'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your password</label>
            <input type='password' name="password" placeholder='Enter your password'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            
            <button type='submit'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >Submit</button>
        </div>
        </Form>
        </div>
        </div>

    )
}
