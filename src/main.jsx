import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./components/Home"
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Login,{loginAction} from "./components/Login"
import Signup,{signupAction} from "./components/Signup"
import Error from "./components/Error.jsx"
import Header,{loginLoader} from './components/Header'
import Github from './components/Github'
import InputDetails from './components/InputDetails'
import GenreatedTimetable from './components/GenreatedTimetable'
import Profile from './components/Profile'
import { isLoginLoader } from './components/Utils'

const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} loader={loginLoader} errorElement={<Error/>}>
    <Route index element={<Home/>} />
    <Route path='github' element={<Github/>}/>
    <Route path="login" element={<Login/>} action={loginAction}/>
    <Route path="signup" element={<Signup/>} action={signupAction}/>
    <Route path="profile" element={<Profile/>} loader={isLoginLoader} />
    <Route path='inputdetails' element={<InputDetails/>} loader={isLoginLoader} />    
    <Route path='generatedtimetable' element={<GenreatedTimetable/>} loader={isLoginLoader} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
