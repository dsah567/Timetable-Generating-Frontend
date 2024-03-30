import React from 'react'
import {Form, redirect,useSearchParams} from  "react-router-dom"
import axios from "axios"

export async function  signupAction({request}){
    let formData = await request.formData();
    let Redirect = null
    try{
        let result =await  axios.post("/api/v1/users/register",{
            name:formData.get("name"),
            email:formData.get("email"),
            password:formData.get("password"),
            username:formData.get("username"),
        })
        .then((res)=>{
            console.log(res.data)
           Redirect="/login"
            })
        .catch((error)=> {
            console.log("Axios Error Signup",error);
            if(error.response.status==400)
                Redirect = "/signup?details=Input_Every_Fields"
            else if(error.response.status==409)
                Redirect = "/signup?details=User_with_email_or_username_exist"
            else
                Redirect = "/signup"
        });
        console.log(result);
        return redirect(Redirect)
    }
    catch(err){
        console.log(err);
        return redirect("/")
    }
     
}

function Signup() {
    let [searchParams, setSearchParams] = useSearchParams();
    let details= searchParams.get("details")
    console.log(details);
    return (
        <div className=" bg-gradient-to-br from-purple-500 to-pink-500">

        <div className="flex justify-center items-center h-screen ">

        <Form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" >
        <div className="mb-4">
        {details && <label className="block text-red-700 text-sm font-bold mb-2">{details}</label> }
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Department Name</label>
            <input type="text" name="name" placeholder='Enter Department Name'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter  Email</label>
            <input type="email" name="email" placeholder='Enter email or username'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Enter username</label>
            <input type="username" name="username" placeholder='Enter username'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter  password</label>
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

export default Signup
