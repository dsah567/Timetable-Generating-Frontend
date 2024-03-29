import React,{useState} from 'react'
import axios from 'axios';
import { redirect } from 'react-router-dom';


function InputDetails() {
  
    const [workingDay, setWorkingDay] = useState({
        fullWorkingDayNo :"",
        halfWorkingDayNo :"",
        periodInFullWorkingDay:"",
        periodBeforeBreak:""
    });

    const [noOfClasses,setNoOfClasses] = useState(0)
    const [displayClassesFilelds, setDisplayClassesFilelds] = useState(null);
    // const [prev,setPrev]=useState(null)
    let [classes,setClasses] =useState([])
    let [teacherID,setTeacherID] = useState({})
    

    const workingDayHandleInputChange = ( e) => {
    const { name, value } = e.target;
    // console.log("workingDayHandleInputChange");
    setWorkingDay({
        ...workingDay,
        [name]:value
    })
  };

  const genreateClassesFileld = (e)=>{
    setDisplayClassesFilelds(false)
    setNoOfClasses(parseInt(e.target.value))
    setDisplayClassesFilelds(e.target.value? true :false)
    // console.log("genreateClassesFileld");
  }
  const handleClassesSubjectChange=(e)=>{
    const { name, value } = e.target;
    const formData = JSON.parse(value);
      const i = parseInt(name.match(/\d+/)[0]);
      const newArray= [...classes]
      newArray[i]={...classes[i],"subjectID":formData}
      setClasses(newArray)
        console.log(formData);
  }

  const handleClassesSubjectRepeatChange=(e)=>{
    const { name, value } = e.target;
    const formData = JSON.parse(value);
      const i = parseInt(name.match(/\d+/)[0]);
      const newArray= [...classes]
      newArray[i]={...classes[i],"repeat":formData}
      setClasses(newArray)
        console.log(formData);
  }
  const handleteacherChange=(e)=>{
    const { name, value } = e.target;
    const formData = JSON.parse(value);
    setTeacherID(formData)
  }

  const  handelPrev = ()=>{
    console.log(workingDay,classes,teacherID);
  }

  const addTimetable=()=>{
    const _array=[]
    const count = parseInt(workingDay.fullWorkingDayNo)+parseInt(workingDay.halfWorkingDayNo)
    for(let i=0;i<count;i++){
      _array.push([])
    }
    classes.forEach((arr)=>{
      arr.timetable=_array
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    addTimetable()
    await axios.post("/api/v1/department",{workingday:workingDay,
                                            classes:classes,
                                            teacherID:teacherID})
                .then((res)=>console.log(res.data.message))
                .catch((err)=>console.log(err))
                window.location.href="/generatedtimetable"
                
  };

    return (
    <>
    <div className=" bg-gradient-to-br from-purple-500 to-pink-500">
      <div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of full working days:</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='fullWorkingDayNo'
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of half working days:</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='halfWorkingDayNo'
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of period in full working days:</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='periodInFullWorkingDay'
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of period in half working days:</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='periodBeforeBreak'
            />

          <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of Classes:</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={genreateClassesFileld}
              name='noOfClasses'
            />
          <br/>
          </div>
          {displayClassesFilelds && (
          <ul>
            {[...Array(noOfClasses)].map((_, index) => (
              <li key={index}>
                <input  placeholder={`No of subjects for Classes${index + 1}`}
                name= {` Classes${index}`}
                type="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handleClassesSubjectChange}/>
              </li>
            ))}

            {[...Array(noOfClasses)].map((_, index) => (
              <li key={index}>
                <input  placeholder={`No of Repeated subjects for Classes${index + 1}`}
                name= {` Classes${index}`}
                type="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handleClassesSubjectRepeatChange}/>
              </li>
            ))}
            <li >
                <input  placeholder={`Enter TeacherID With subjectID`}
                name= "teacherID"
                type="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handleteacherChange}/>
              </li>
          </ul>
        )}

        
        
        <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handelPrev}>Click for preview</label> 
          

        {/* <br/>
        {prev && (
          <ul>
            <li>{workingDay}</li>
            <li>{classes}</li>
            <li>{teacherID}</li>
          </ul>
        )}
        <br/> */}
          
            

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    </>
    )
}

export default InputDetails
