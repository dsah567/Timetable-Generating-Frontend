import React from 'react'


function Home() {
    // window.location.reload();
    return (
        <div className=" bg-gradient-to-br from-purple-500 to-pink-500 ">
            <div className="bg-gray-700 text-white font-bold  py-3 px-2 rounded text-lg mb-2">
                This is a timetable generating system for department of college or school. This website features to generate and download timetable.
            </div>
            <div className='m-4 '>
            <div className='p-4 ' >
                <div className="bg-gray-700 text-white font-bold text-lg mb-2  py-3 px-2 rounded">
                <h1 className="  font-bold text-5xl mb-2  py-3 px-2 ">Welcome to the Timetable Generating System</h1>
        <p className=" font-bold text-lg mb-2  py-3 px-2 ">Welcome to the Timetable Generating System, a powerful and intuitive platform designed to streamline the process of creating academic timetables for schools, colleges, and universities. Our system ensures efficiency and accuracy in scheduling classes, managing teacher assignments, and optimizing educational resources.</p>

        <h2 className=" font-bold text-4xl mb-2  py-3 px-2 ">Features</h2>
        <ul>
            <li className=" font-bold text-lg mb-2  py-3 px-2 "><strong className=" font-bold text-3xl mb-2  py-3 px-2 ">Signup Page:</strong> New users can register an account by providing their details.</li>
            <li className=" font-bold text-lg mb-2  py-3 px-2 "><strong className=" font-bold text-3xl mb-2  py-3 px-2 ">Login Page:</strong> Registered users can log into the website to access the system.</li>
            <li className=" font-bold text-lg mb-2  py-3 px-2 "><strong className=" font-bold text-3xl mb-2  py-3 px-2 ">Profile Section:</strong>
                <ul>
                    <li>View and update your user details.</li>
                    <li>Check if all necessary details and subjects have been input.</li>
                    <li>Verify if the timetable has been generated.</li>
                </ul>
            </li>
            <li className=" font-bold text-lg mb-2  py-3 px-2 "><strong className=" font-bold text-3xl mb-2  py-3 px-2 ">Input Details Page:</strong>
                <ul>
                    <li>Enter details for teachers, subjects, teaching hours, and specific classes.</li>
                    <li>Manage the allocation of subjects and teaching schedules.</li>
                </ul>
            </li>
            <li className=" font-bold text-lg mb-2  py-3 px-2 "><strong className=" font-bold text-3xl mb-2  py-3 px-2 ">Generate Timetable:</strong>
                <ul>
                    <li>Click the 'Generate' button to create a timetable based on the provided inputs.</li>
                    <li>Ensure no subject is assigned to more than one class simultaneously.</li>
                    <li>Manage classes with sections by appending section names to subjects.</li>
                    <li>Prevent the same subject from being assigned to multiple teacher IDs.</li>
                </ul>
            </li>
            <li className=" font-bold text-lg mb-2  py-3 px-2 "><strong className=" font-bold text-3xl mb-2  py-3 px-2 ">Download Timetable:</strong> Download the generated timetable in PDF format for easy distribution and printing.</li>
            <li className=" font-bold text-lg mb-2  py-3 px-2 "><strong className=" font-bold text-3xl mb-2  py-3 px-2 ">GitHub Repository:</strong> Access the project's source code on our <a href="https://github.com/DipuKumarSah">GitHub page</a>.</li>
        </ul>

        <h2 className=" font-bold text-3xl mb-2  py-3 px-2 ">How It Works</h2>
        <p className=" font-bold text-lg mb-2  py-3 px-2 ">Our system generates timetables based on the number of periods each subject needs to be taught in a week. It ensures that:</p>
        <ul className=" font-bold text-lg mb-2  py-3 px-2 ">
            <li>No subject is scheduled for two classes at the same time.</li>
            <li>Subjects for classes with sections are differentiated by appending section names.</li>
            <li>Each subject is linked to a unique teacher ID to avoid conflicts.</li>
        </ul>

        <br/>

        <h2 className=" font-bold text-3xl mb-2  py-3 px-2 ">About the Developer</h2>
        <p className=" font-bold text-lg mb-2  py-3 px-2 ">This project is developed by <strong className=" font-bold text-2xl mb-2  py-3 px-2 ">Dipu Kumar Sah</strong>. Connect with me on:</p>
        <ul className=" font-bold text-lg mb-2  py-3 px-2 ">
            <li><a href="https://github.com/dsah567">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/dipu-sah-622a31205">LinkedIn</a></li>
            <li><a href="https://x.com/DipuSah789">Twitter</a></li>
        </ul>
        <p className=" font-bold text-xl mb-2  py-3 px-2 ">Explore the features, manage your schedules effectively, and enhance the academic planning of your institution with our Timetable Generating System.</p>
    
                </div>
                
            </div>
            <br/>
            </div>
        </div>
    )
}

export default Home
