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
                <div className='m-4 border-8 rounded-lg border-gray-700 lg:flex'>
                    <img className='w-full md:w-full lg:w-3/5 py-6 px-4 ' src={Signup} alt=""  />
                    <p className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">In this page you have to do signup by enetering Department Name, Department Username, email and password. Email and username must be different form other user. The password is stored in crypted format.  </p>
                </div>
                <div className='m-4 border-8 rounded-lg border-gray-700 lg:flex'>
                    <img className='w-full md:w-full lg:w-3/5 py-6 px-4' src={Login} alt=""  />
                    <p className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">Here you have to login. In this website if you login for once then for one day you will need to again enter the login form.</p>
                </div>
                <div className='m-4 border-8 rounded-lg border-gray-700 lg:flex'>
                    <img className='w-full md:w-full lg:w-3/5 py-6 px-4' src={Profile} alt=""  />
                    <p className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">Its shows about your detail Department Detail : shows either you have enter the details of department or not and Timetable : shows either your time table is generated or not.</p>
                </div>
                <div className='m-4 border-8 rounded-lg border-gray-700 lg:flex'>
                    <img className='w-full md:w-full lg:w-3/5 py-6 px-4' src={InputDetails} alt=""  />
                    <p className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">Here you have to fill the details. no two classes should have same subjectID. There is n option for section in a class but you can generate timetable for section by adding section name at last of subjectID eg for cs11 subjectID do c11a, cs11b, cs11c</p>
                </div>
                <div className='m-4 border-8 rounded-lg border-gray-700 lg:flex'>
                    <img className='w-full md:w-full lg:w-3/5 py-6 px-4' src={GeneratedTimetable} alt=""  />
                    <p className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">After Details Entered visit This page and click on Generate Time Tbale and wait for some time untile Timetable generated is displayed once timetable generated it will show time table. You can also download in .pdf file by clicing on Download as pdf</p>
                </div>
            </div>
            <br/>
            </div>
        </div>
    )
}

export default Home
