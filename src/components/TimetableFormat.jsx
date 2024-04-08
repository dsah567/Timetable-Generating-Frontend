import React from 'react'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function TablePerDay({day,Index}){
    return(
        <tr>
            <th className="bg-white border-2 text-gray-700 text-lg font-bold p-2 ">Day {Index+1}</th>
            {day.map((ele,index)=><td key={index} className="bg-white border-2 text-gray-700 text-sm font-bold p-2 ">{ele}</td>)}
        </tr>
    )
}

function TeacherTable({subjectName,teachID,Index}){
    return(<tr>
        <td className="bg-white border-2 text-gray-700 text-lg font-bold p-2">{Index + 1}</td>
        <td className="bg-white border-2 text-gray-700 text-sm font-bold p-2">{subjectName}</td>
        <td className="bg-white border-2 text-gray-700 text-sm font-bold p-2">{teachID[subjectName]}</td>
        </tr>)
}

function TablePerClasses({classe,subjectList,teachID}){
    let a =1
    return (
        <div>
            <table className='table-auto'>
            <thead>
            <tr>
                <th className="bg-white border-2 text-gray-700 text-lg font-bold p-2"></th>
                {classe[0].map((ele,index)=><th className="bg-white border-2 text-gray-700 text-lg font-bold p-2"> {(ele=="break")?  ( a=0,"Break") : `Period ${index+a}`}</th>)}
            </tr>
            </thead>
            <tbody>
            {classe.map((ele,index)=><TablePerDay key={index} day={ele} Index={index} />)} <br/>
            </tbody>
            </table>

            <table className='table-auto'>
                <thead>
                <tr>   
                <th className="bg-white border-2 text-gray-700 text-lg font-bold p-2">S. N.</th> 
                <th className="bg-white border-2 text-gray-700 text-lg font-bold p-2">SubjectID</th>
                <th className="bg-white border-2 text-gray-700 text-lg font-bold p-2">TeacherID</th>
                </tr>
                </thead>
                <tbody>
                {subjectList.map((ele,index)=>
                <TeacherTable key={index} Index={index} subjectName={ele} teachID={teachID}/>
                )}
                </tbody>
            </table>

            <br/>
        </div>
            
        )
}

function TimetableFormat({details}) {
    let {classes,subjectIdKey,teachID}=details

    const demoFromHTML = async () => {
        const pdf = new jsPDF();
    
        //const source = ;
        //const source2 = document.getElementById('content2');
    
        const addPage = async (element) => {
          const canvas = await html2canvas(element);
          const imageData = canvas.toDataURL('image/png');
          pdf.addImage(imageData, 'PNG', 10, 10, 190, 0);
          pdf.addPage();
        };
    
        for(let i=0;i<classes.length;i++){
            await addPage(document.getElementById(`pdf${i}`));
        }
        // await addPage(source2);
        // await addPage(source);
        // await addPage(source2);
    
        // Save the PDF
        pdf.save('Test.pdf');
      };

    return(
    <div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
    onClick={demoFromHTML}>Download in .pdf File</button>
    <div id="content" className='flex flex-col  items-center text-center'>
        {[...Array(classes.length)].map((ele,index)=>
        <div id={`pdf${index}`} >
            <TablePerClasses key={index} classe={classes[index].timetable} subjectList={subjectIdKey[index]} teachID={teachID} />
        </div>
        )}
        
    </div>
    </div>
    )
 }

export default TimetableFormat
