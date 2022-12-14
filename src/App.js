// import { useState } from 'react';
import Login from './Components/login'

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './Components/Header';

import Home from './Components/Home'
import NotFound from './Components/NotFound';

function App() {
//   const [showcomponent,setShowComponent] =useState(true)


// const updateValue=()=>{
//   setShowComponent(false)

// }


  return (
  <BrowserRouter>
    {/* { showcomponent && <Login   onChangeValue={updateValue} />  }
      {!showcomponent && <Todo />  }   */}
              <Header/>


      <Routes >
      <Route path='/login' element={<Login/>} />
        
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<NotFound/>} />
        



      </Routes>

      </BrowserRouter>
    
    
    
    
  
    
  );
}

export default App;
