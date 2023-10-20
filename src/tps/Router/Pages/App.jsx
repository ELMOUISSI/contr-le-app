import React from 'react'
import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './Layout'
import Blogs from './Blogs'
import Home from './Home'
import Contact from './Contact'
import PageEror from "./PageEror"
const App = () => {
  return (
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>} > 
     <Route index path='/home' element={<Home/>} />
     <Route path='/blogs' element={<Blogs/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/*' element={<PageEror/>} />
     </Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
