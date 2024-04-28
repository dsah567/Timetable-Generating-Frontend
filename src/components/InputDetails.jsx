import React,{useState} from 'react'
import axios from 'axios';


function InputDetails() {
  
    const [workingDay, setWorkingDay] = useState({
        fullWorkingDayNo :"",
        halfWorkingDayNo :"",
        periodInFullWorkingDay:"",
        periodBeforeBreak:""
    });

    const [noOfClasses,setNoOfClasses] = useState(0)
    const [noOfTeachers,setNoOfTeachers] = useState(0)
    const [subjectSpecifi,setSubjectSpecifi] = useState(0)
    const [displayClassesFilelds, setDisplayClassesFilelds] = useState(null);
    const [displayTeacherIDFilelds, setDisplayTeacherIDFilelds] = useState(null);
    const [displaySubjectSpecifiFileld, setDisplaySubjectSpecifiFileld] = useState(null);
    //const [prev,setPrev]=useState(null)
    let [classes,setClasses] =useState([])
    const [teachers,setTeachers]=useState([])
    const [specificSub,setSpecificSub]=useState([])
    

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
  const genreateTeacherIDFileld=(e)=>{
    setDisplayTeacherIDFilelds(false)
    setNoOfTeachers(parseInt(e.target.value))
    setDisplayTeacherIDFilelds(e.target.value? true :false)
  }

  const genreateSubjectSpecifiFileld =(e)=>{
    setDisplaySubjectSpecifiFileld(false)
    setSubjectSpecifi(parseInt(e.target.value))
    setDisplaySubjectSpecifiFileld(e.target.value? true :false)
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
    let  { name, value } = e.target;
    console.log(`val ${value}`);
    console.log(JSON.parse(`${value}`));
    const formData = JSON.parse(`${value}`);
    const i = parseInt(name);
    console.log(i);
    const newArray= [...teachers]
    newArray[i]=formData
    setTeachers(newArray)
  }
  const handlesubjectSpecifiChange=(e)=>{
    let  { name, value } = e.target;
    console.log(`val ${value}`);
    console.log(JSON.parse(`${value}`));
    const formData = JSON.parse(`${value}`);
    const i = parseInt(name);
    console.log(i);
    const newArray= [...specificSub]
    newArray[i]=formData
    setSpecificSub(newArray)
  }
  const  handelPrev = ()=>{
    console.log(workingDay,classes,teachers,specificSub);
    // setPrev(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(workingDay,classes,teachers,specificSub);
    await axios.post("/api/v1/department",{workingday:workingDay,
                                            classes:classes,
                                            teacherID:teachers,
                                            specificSub:specificSub})
                .then((res)=>console.log(res.data.message))
                .catch((err)=>console.log(err))
               window.location.href="/generatedtimetable"
                
  };

    return (
    <>
    <div className=" bg-gradient-to-br from-purple-500 to-pink-500">
      <div>
      <div className=" h-screen">
        <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label className="w-full text-gray-700 text-sm font-bold mb-2">Enter the no of full working days:</label>
            <input
              type="number" placeholder='Enter the no of full working days'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='fullWorkingDayNo' required
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of half working days:</label>
            <input
              type="number" placeholder='Enter the no of half working days, if there is no half working days put 0'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='halfWorkingDayNo' required
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of period in full working days:</label>
            <input
              type="number" placeholder='Enter the no of period in full working days'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='periodInFullWorkingDay' required
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of period before break:</label>
            <input
              type="number" placeholder='Enter the no of period before break, if there is no break put 0'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={workingDayHandleInputChange}
              name='periodBeforeBreak' required
            />

          <label className="block text-gray-700 text-sm font-bold mb-2">Enter the no of Classes:</label>
            <input
              type="number" placeholder='Enter the no of Classes'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={genreateClassesFileld}
              name='noOfClasses' required
            />
          <br/>
          </div>
          {displayClassesFilelds && (
          <ul>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter SubjectID and Teaching hours ( periods) per week of that subject in format  {'{ "sub1":"5","sub2":"7"}'} for each classes
            </label>
            {[...Array(noOfClasses)].map((_, index) => (
              <li key={index}>
                <input  placeholder={`subjectID and teaching hour for all subjects of  Classes${index + 1}`}
                name= {` Classes${index}`}
                type="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handleClassesSubjectChange} required/> 
              </li>
            ))}

            <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter SubjectID and no of continious period in format  {'{ "sub1":"5","sub2":"7"}'} of paticular classes, if no continious period for any classes leave empty 
            </label>
            {[...Array(noOfClasses)].map((_, index) => (
              <li key={index}>
                <input  placeholder={`SubjectID and no of continious period for Classes${index + 1}`}
                name= {` Classes${index}`}
                type="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handleClassesSubjectRepeatChange}/>
              </li>
            ))}
          </ul>
        )}
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter no of teachers
            </label>
            <input  placeholder={`no of teachers`}
            name= "teacherID"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-70leading-tight focus:outline-none focus:shadow-outline" 
            onChange={genreateTeacherIDFileld} required/>

            {displayTeacherIDFilelds &&
            (
              <ul>
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter TeacherID With subjectID they teach in format {'{"t1": ["cs11", "cs21"]}'}</label>
              {[...Array(noOfTeachers)].map((_, index) => (
                <li key={index}>
                <input  placeholder={`Enter for teacher${index +1}`}
                name= {`${index}`}
                type="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-70leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handleteacherChange} required/>   
                </li>
                ))}
                </ul>
            )}

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter no of Subjects to be in specific period of a paticular day, if there is no ubjects to be in specific period leave blank
            </label>
            <input  placeholder={`Subjects to be in specific period`}
            name= "subjectSpecifi"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-70leading-tight focus:outline-none focus:shadow-outline" 
            onChange={genreateSubjectSpecifiFileld}/>

            {displaySubjectSpecifiFileld &&
            (
              <ul>
              <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter subjectID with day number and periods number in format {' {"cs11":["1-1","2-1"]} '} 1-1 means first day first period and 2-1 means second day and first period
              </label>
              {[...Array(subjectSpecifi)].map((_, index) => (
                <li key={index}>
                <input  placeholder={`Enter subjectID with day number and periods number`}
                name= {`${index}`}
                type="textarea"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-70leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handlesubjectSpecifiChange}/>   
                </li>
                ))}
                </ul>
            )}

        
        
        {/* <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handelPrev}>Click for preview</label>  */}
          

      
        {/* {prev && (
          <ul className="my-2">
           {(Object.keys(workingDay)).map((ele,index)=><li key={index}>{ele} : {workingDay[ele]}</li>)}
             <li>{classes.forEach((ele,index)=>ele.subjectID)}</li>  
             <li>{teachers.forEach(ele=><li>{Object.keys(ele)}</li>)}</li> 
          </ul>
        )} */}
          
            

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
