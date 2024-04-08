import React from 'react'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function TablePerDay({day}){
    return(
       day.map((ele,index)=><td key={index} className="bg-white border-2 text-gray-700 text-sm font-bold p-2 ">{ele}</td>)
    )
}

function TeacherTable({subjectName,teachID}){
    return(<div>
        <td className="bg-white border-2 text-gray-700 text-sm font-bold p-2">{subjectName}</td>
        <td className="bg-white border-2 text-gray-700 text-sm font-bold p-2">{teachID[subjectName]}</td>
        </div>)
}

function TablePerClasses({classe,subjectList,teachID}){
    return (
        <div>
            <div className='table-auto'>

            {classe.map((ele,index)=><tr><TablePerDay key={index} day={ele} /></tr> )} <br/>
            </div>

            <div className='table-auto'>
            {subjectList.map((ele,index)=>
               <tr>
                <TeacherTable key={index} subjectName={ele} teachID={teachID}/>
                </tr>
                )}
            </div>

            <br/>
        </div>
            
        )
}

function TimetableFormat({details}) {
    let {classes,subjectIdKey,teachID}=details

    const demoFromHTML = async () => {
        const pdf = new jsPDF();
    
        const source = document.getElementById('content');
        //const source2 = document.getElementById('content2');
    
        const addPage = async (element) => {
          const canvas = await html2canvas(element);
          const imageData = canvas.toDataURL('image/png');
          pdf.addImage(imageData, 'PNG', 10, 10, 190, 0);
          pdf.addPage();
        };
    
        await addPage(source);
        // await addPage(source2);
        // await addPage(source);
        // await addPage(source2);
    
        // Save the PDF
        pdf.save('Test.pdf');
      };

    return(
    <div id="content">
        
        {[...Array(classes.length)].map((ele,index)=>
        <div >
            <TablePerClasses key={index} classe={classes[index].timetable} subjectList={subjectIdKey[index]} teachID={teachID} />
        </div>
        
        )}
        <button onClick={demoFromHTML}>Run Code</button>
        {/* <TablePerClasses classe={classes[0].timetable} subjectList={subjectIdKey[0]} teachID={teachID} /><br/>
        <TablePerClasses classe={classes[1].timetable} subjectList={subjectIdKey[1]} teachID={teachID} /><br/>
        <TablePerClasses classe={classes[2].timetable} subjectList={subjectIdKey[2]} teachID={teachID}/><br/> */}
    </div>
    )
 }

export default TimetableFormat
