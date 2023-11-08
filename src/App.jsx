import React, { useContext } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import "./style.scss"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext, AuthContextProvider } from './context/AuthContext'

const App = () => { 
  
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login'/>
    }

    return children
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
              }
              />
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>    
  )
}

export default App