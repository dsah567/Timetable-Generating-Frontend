import React from 'react'
import Githubfrontend from './photos/Github-frontend.png'
import Githubbackend from './photos/Github-backend.png'

function Github() {
    return (
        <div className=" bg-gradient-to-br from-purple-500 to-pink-500 ">
            <p className="bg-gray-700 text-white font-bold  py-3 px-2 rounded">Github is a cloud based version-control website where we can keep our code. If you are not interested about the codes of this website, leave it. If interested, this project is divided into two parts frotend and backend.By clicking on below button you can visit the github pages of this project. This project is developed using MERN Stack  </p> <br/> 
            <div className='lg:flex'>
            <div className='m-4'>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-3 px-2 rounded focus:outline-none focus:shadow-outline" 
            href='https://github.com/dsah567/Timetable-Generating-Frontend' target='_blank' >Click here to visit, Github Frontend Page</a> 
            <img className='w-full md:w-full lg:w-full py-6 px-4' src={Githubfrontend} alt="Image of github timetable generating system frontend page"  />
            </div>
            <div className='m-4'>    
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-3 px-2 rounded focus:outline-none focus:shadow-outline" 
            href='https://github.com/dsah567/Timetable-Generating-Backend' target='_blank' >Click here to visit, Github Backend Page</a>
            <img className='w-full md:w-full lg:w-full py-6 px-4' src={Githubbackend} alt="Image of github timetable generating system backend page" />
            </div>
            </div>
        </div>
    )
}

export default Github
