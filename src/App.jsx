import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from "./layout/MainLayout"
import { useDispatch } from 'react-redux'

import {Home,Login,Profile,SignUp,SingleImage} from './pages'


import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { login, authReady } from './app/features/userSlice'

const App = () => {
  const dispatch = useDispatch()
  const   {user, isAuthReady} =useSelector((store) => store.user)
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoutes user={user}>
        <MainLayout/>
      </ProtectedRoutes>,
      children:[
        {
          index:true,
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/singleImage/:id",
          element:<SingleImage/>
        }
      ]
    },
    {
      path: "/login",
      element: user ? <Navigate to='/'/> : <Login/>
    },
    {
      path: "/signup",
      element: user ? <Navigate to='/'/> : <SignUp/>
    }
  ])

  onAuthStateChanged(auth, (user)=>{
    dispatch(login(user));
    dispatch(authReady())
  } )

  return  <>
  {isAuthReady && <RouterProvider router={routes}/>}
  </>
  
}

export default App
