import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'


import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import CreateUser from "./pages/CreateUser"
import Home from './pages/Home'

const AppRutas=()=>{
  const routes =useRoutes([
    {path:'/login', element: <Login/>},
    {path:'/createUser', element: <CreateUser/>},
    {path:'/home', element:<Home/>}
  ])
  return routes
}
function App() {
  function enrutar(){
    return <AppRutas />
  }
  return (
    <>
      <BrowserRouter>
      <Layout>
        {enrutar()}
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
