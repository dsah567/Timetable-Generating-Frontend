import React from 'react'
import Login from "./photos/Login.png"
import Signup from "./photos/signup.png"
import Profile from "./photos/Profile.png"
import InputDetails from "./photos/Input Details.png"
import GeneratedTimetable from "./photos/Generated Timetable.png"

function Home() {
    // window.location.reload();
    return (
        <div className=" bg-gradient-to-br from-purple-500 to-pink-500 ">
            <div className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">
                This is a timetable generating system for department of college or school. This website features to generate and download timetable.
            </div>
            <div>
            <div className='m-4 '>

                
                 <p className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">In this page you have to do signup by enetering Department Name, Department Username, email and password. Email and username must be different form other user. The password is stored in crypted format.  </p>
            </div>
            <br/>
            </div>
        </div>
    )
}

export default Home
