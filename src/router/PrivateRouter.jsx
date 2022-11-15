import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { MovieContext } from '../context/AuthContext'

const PrivateRouter = () => {

  const{currentUser}=useContext(MovieContext)
  return currentUser ? <Outlet/> : <Navigate to='/login' replace />
}

export default PrivateRouter