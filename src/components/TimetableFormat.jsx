import React from 'react'

function TablePerDay({day}){
    return(
       day.map((ele,index)=><label key={index} className="bg-white text-gray-700 text-sm font-bold p-2">{ele}</label>)
    )
}

function TeacherTable({subjectName,teachID}){
    return(<div>
        <span className="bg-white text-gray-700 text-sm font-bold p-2">{subjectName}</span>
        <span className="bg-white text-gray-700 text-sm font-bold p-2">{teachID[subjectName]}</span>
        </div>)
}

function TablePerClasses({classe,subjectList,teachID}){
    return (
        <div>
            {classe.map((ele,index)=><div><TablePerDay key={index} day={ele} /></div> )} <br/>
            {subjectList.map((ele,index)=>
            <div>
                <TeacherTable key={index} subjectName={ele} teachID={teachID}/>
                </div>
                )}
            <br/>
        </div>
            
        )
}

function TimetableFormat({details}) {
    let {classes,subjectIdKey,teachID}=details
    return(
    <div>
        {[...Array(classes.length)].map((ele,index)=>
        <div>
            <TablePerClasses key={index} classe={classes[index].timetable} subjectList={subjectIdKey[index]} teachID={teachID} />
        </div>
        
        )}
        {/* <TablePerClasses classe={classes[0].timetable} subjectList={subjectIdKey[0]} teachID={teachID} /><br/>
        <TablePerClasses classe={classes[1].timetable} subjectList={subjectIdKey[1]} teachID={teachID} /><br/>
        <TablePerClasses classe={classes[2].timetable} subjectList={subjectIdKey[2]} teachID={teachID}/><br/> */}
    </div>
    )
//     return (
//         <div>
//             {console.log(details.classes)};
//             {
//                 classes.map(
//                     (array,index)=>(
//                         array.timetable.map((ele)=>(ele.map((item,ind)=><li>{item}</li>)
//                         )
//                         )
//                     )
//                 )
               
//             }

//             {
//                subjectIdKey.map((ele,index)=>(
//                     <ul>
//                         {ele.map((el,index)=><li>{el}</li>)}
//                     </ul>
//                    )
//                )
//             }
//         </div>
//     )
 }

export default TimetableFormat
