import React from 'react'
import Layout from "./components/Layout"
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';

const App = () => {
  let router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Homepage/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

