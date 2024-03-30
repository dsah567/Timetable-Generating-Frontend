import axios from 'axios'
import React, { useState } from 'react'

function GenreatedTimetable() {
    const[result,setResulet]=useState(null)
    const handleGenerateTimetable =()=>{
        axios.post("/api/v1/timetable")
            .then((res)=>console.log(res.data.message))
            .catch((err)=>console.log(err))
    }
    return (
        <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleGenerateTimetable}>Genetare Timetable</button>
        </div>

    )
}

export default GenreatedTimetable
