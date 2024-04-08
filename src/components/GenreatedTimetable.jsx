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
            .then((res)=>{//console.log(res.data.message)
                            setFlag(res.data.message)})
            .catch((err)=>console.log(err))
    }
    return (
        <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleGenerateTimetable}>Genetare Timetable</button>
                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold inline mt-4 mx-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline">{flag? <>{flag}</>:<></>}</div>
                    {result? <TimetableFormat details={Data.timetableData}/>:null}
        </div>

    )
}

export default GenreatedTimetable
