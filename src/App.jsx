import React from 'react'
import routes from './router/routes'
import { useRoutes } from 'react-router-dom'
import './App.css'
export default function App () {
  const element = useRoutes(routes)
  //我不想开会写代码了
  return (
    <div className='app'>
      {element}
    </div>
  )
}
