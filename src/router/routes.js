import Login from '../pages/Login'
import Home from '../pages/Home'
import FirstPage from '../pages/FirstPage'
import SecondPage from '../pages/SecondPage'
import ThirdPage from '../pages/ThirdPage'
import FourthPage from '../pages/FourthPage'
import { Navigate } from 'react-router-dom'
import React from 'react'

const routes = [
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Home',
    element: <Home />,
    children: [
      {
        path: 'Firstpage',
        element: <FirstPage />,
      },
      {
        path: 'Secondpage',
        element: <SecondPage />,
      },
      {
        path: 'Thirdpage',
        element: <ThirdPage />,
      },
      {
        path: 'Fourthpage',
        element: <FourthPage />,
      },
      {
        path: '',
        element: <FirstPage />,
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/Login" />
  }
]

export default routes