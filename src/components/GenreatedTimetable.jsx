import axios from 'axios'
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import TimetableFormat from './TimetableFormat'

function GenreatedTimetable() {
    const Data = useLoaderData()
    const [flag ,setFlag]=useState(null)
    const[result,setResulet]=useState(Data.timetableData)
    const handleGenerateTimetable =()=>{
        axios.post("/api/v1/timetable")
            .then((res)=>{
                            setFlag(res.data.message)
                            setResulet(res.data.data)
                        })
            .catch((err)=>console.log(err))
    }
    return (
        <div className=" bg-gradient-to-br from-purple-500 to-pink-500">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleGenerateTimetable}>Genetare Timetable</button>
                    {flag?  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold inline mt-4 mx-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline">{flag}</div>:<></>}
                    
                    {result? <TimetableFormat details={result}/>:null}
        </div>

    )
}

export default GenreatedTimetable
