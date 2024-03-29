import React, { useState } from 'react'
import { Link, NavLink, Outlet, useLoaderData,redirect } from 'react-router-dom'
import axios from 'axios';

export async function loginLoader() {
    try {
        let isLoggedIn
        await axios.post("/api/v1/users/islogedin")
            .then((res) => isLoggedIn = res.status)
            .catch((err) => {
                console.log("error")
            })
        // console.log("loader", isLoggedIn);
        if (isLoggedIn === 200) {
            return true
        }
        return false
    } catch (error) {
        console.log("error");
    }
}
export default function Header() {
    const [isLoggedIn,setisLoggedIn]=useState(useLoaderData())
    const logout=async ()=>{
                            await axios.post("/api/v1/users/logout")
                                    .then((res)=>console.log(res))
                                    .catch((err)=>console.log(err))
                            setisLoggedIn(false)
                            window.location.href="/"
                            }
    
    // console.log("function", isLoggedIn);
        return (
            <>
            <nav className="bg-gray-800 p-4 flex justify-between items-center shadow sticky z-50 top-0">

                {/* Left Part - Logo */}
                <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
                <span className="text-white text-lg font-bold">Timetable</span>
                </Link>

                {/* Middle Part - Home &  (Profile & input details & generated timetable timetable) & github */}
                <>
                <ul className="flex space-x-4">
                    <li>
                    <NavLink to="/" className={({ isActive }) =>`text-white ${ isActive ?  "text-red-400" : "text-gray-700"}  hover:text-gray-300`}>
                                            Home </NavLink>
                    </li>
                    {isLoggedIn && 
                    <>
                    <li>
                    <NavLink to="/profile" className={({ isActive }) =>`text-white ${ isActive ?  "text-red-400" : "text-gray-700"}  hover:text-gray-300 `} >Profile</NavLink>
                    </li> 
                    <li>
                    <NavLink to="/inputdetails" className={({ isActive }) =>`text-white hover:text-gray-300 ${ isActive ?  "text-red-400" : "text-gray-700"}`} >Input Details</NavLink>
                    </li>
                    <li>
                    <NavLink to="/generatedtimetable" className={({ isActive }) =>`text-white hover:text-gray-300 ${ isActive ?  "text-red-400" : "text-gray-700"}`} >Genreated Timetable</NavLink>
                    </li>
                    </>
                    }
                    <li>
                    <NavLink to="/github" className={({ isActive }) =>`text-white hover:text-gray-300 ${isActive ?  "text-red-400" : "text-gray-700"}`}>
                                            github </NavLink>
                    </li>
                </ul>
                </>

                {/* Right Part - Login&Signup / Logout */}
                <div>
                    {isLoggedIn ? (
                        <button onClick={logout} className="text-white hover:text-gray-300">Logout</button>
                    ) : (
                    <>
                        <NavLink to="/login" className={({ isActive }) =>`text-white hover:text-gray-300 ${ isActive ?  "text-red-400" : "text-gray-700"}  `} >Login</NavLink>
                        <span className="text-white mx-2">|</span>
                        <NavLink to="/signup" className={({ isActive }) =>`text-white hover:text-gray-300 ${ isActive ?  "text-red-400" : "text-gray-700"}  `} >Signup</NavLink>
                    </>
                    )}
                </div>
            </nav>
                <Outlet />
            </>
        )
    
    
}
