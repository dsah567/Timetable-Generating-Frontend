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
    
    function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
     dropdownContent.classList.toggle("hidden");}                        
    // console.log("function", isLoggedIn);
        return (
            <>
            <nav className="bg-gray-800 p-4 flex justify-between items-center shadow sticky z-50 top-0">

                {/* Left Part - Logo */}
                <Link to="/" className="flex items-center">
                {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" /> */}
                <span className="text-white text-lg font-bold">Timetable</span>
                </Link>

                {/* Middle Part - Home &  (Profile & input details & generated timetable timetable) & github */}
                <div class="dropdown ">
                <button onClick={toggleDropdown} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center sm:hidden ">
                    <span className="mr-2">Options</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 8.586L17.414 6 10 13.414 2.586 6 0 8.586 10 18z"/></svg>
                </button>
                <ul id="dropdownContent" className="hidden sm:flex sm:space-x-4">
                    <li>
                    <NavLink to="/" className={({ isActive }) =>` ${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300`}>
                                            Home </NavLink>
                    </li>
                    {isLoggedIn && 
                    <>
                    <li>
                    <NavLink to="/profile" className={({ isActive }) =>` ${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300 `} >Profile</NavLink>
                    </li> 
                    <li>
                    <NavLink to="/inputdetails" className={({ isActive }) =>` ${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300`} >Input Details</NavLink>
                    </li>
                    <li>
                    <NavLink to="/generatedtimetable" className={({ isActive }) =>`${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300 `} >Genreated Timetable</NavLink>
                    </li>
                    </>
                    }
                    <li>
                    <NavLink to="/github" className={({ isActive }) =>`${isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300 `}>
                                            github </NavLink>
                    </li>
                </ul>
                </div>

                {/* Right Part - Login&Signup / Logout */}
                <div>
                    {isLoggedIn ? (
                        <button onClick={logout} className="text-white hover:text-gray-300">Logout</button>
                    ) : (
                    <>
                        <NavLink to="/login" className={({ isActive }) =>`${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300 `} >Login</NavLink>
                        <span className="text-white mx-2">|</span>
                        <NavLink to="/signup" className={({ isActive }) =>`${ isActive ?  "text-red-500" : "text-white"}  hover:text-gray-300`} >Signup</NavLink>
                    </>
                    )}
                </div>
            </nav>
            <div className=" bg-gradient-to-br from-purple-500 to-pink-500 h-screen">
                <Outlet />
            </div>
            </>
        )   
}