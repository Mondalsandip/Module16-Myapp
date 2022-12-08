import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    let nav=useNavigate()

const logout=()=>{
    nav('/login',true)

}





  return (
    <div className='home_details'>
     <h1>Login Successful and Welcome.</h1> 

      <button type='button' onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
