// App.js
import React, { useState, useEffect, createContext, useContext } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Contact from './Contact.js';
import Services from './Services.js';
import About from './About.js';
import Home from './Home.js';
  
export const UserContext = createContext();

const App = () => {

  const [number, setNumber] = useState(0);

  const [decrement, setDecrement] = useState(10);
     
  return (
    <UserContext.Provider value={{val1:number,val2:decrement}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <button onClick={()=>setNumber(number+1)}>Increment</button>
      <button onClick={()=>setDecrement(decrement-1)}>Decrement</button>
      <h1>{number}</h1>
      <h1>{decrement}</h1>    */}
        {/* <Child /> */}
    </UserContext.Provider>
  );
};

export default App;
