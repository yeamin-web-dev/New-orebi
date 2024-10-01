import React from 'react'
import Layout from "./components/Layout"
import Home from "./pages/Homepage"
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Homepage from './pages/Homepage';

const App = () => {
  let router=createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/'element={<Homepage/>}></Route>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

