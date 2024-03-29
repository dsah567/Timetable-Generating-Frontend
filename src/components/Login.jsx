import React from 'react'
import {Form} from  "react-router-dom"
import axios from "axios"

export async function  loginAction({request}){
    let formData = await request.formData();
    try{
        let result =await  axios.post("/api/v1/users/login",{
            email:formData.get("email"),
            password:formData.get("password")
        })
        .then((res)=>console.log(res.data))
        .catch(function (error) {
            console.log(error);
        });
        console.log(result);
        return window.location.href="/"
    }
    catch(err){
        console.log(err);
    }
     
}

export default function Login() {
    return (
        <div className=" bg-gradient-to-br from-purple-500 to-pink-500">

        <div className="flex justify-center items-center h-screen ">

        <Form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" >
        <div className="mb-4">
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
