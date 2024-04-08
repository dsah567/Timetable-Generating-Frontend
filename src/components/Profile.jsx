import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Profile() {
    const Data = useLoaderData()
    return (
        <div >
        {Data &&<div>
            <div className="flex justify-center items-center h-screen ">
            <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-2xl font-bold mb-2">Department Name : {Data.User.name}</label>
            <label className="block text-gray-700 text-2xl font-bold mb-2">Email : {Data.User.email}</label>
            <label className="block text-gray-700 text-2xl font-bold mb-2">Username : {Data.User.username}</label>
            <label className="block text-gray-700 text-2xl font-bold mb-2">Department Detail  : {Data.Department? "Completed" : "Not Completed"}</label>
            <label className="block text-gray-700 text-2xl font-bold mb-2">Timetable   : {Data.TimetableStatus? "Generated" : "Not Generated"}</label>
            </div>
            </div>
        </div> 
        }
        </div>

    )
}

export default Profile
