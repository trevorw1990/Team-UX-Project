import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Homepage';

export default function App() {
 


  return (
    <div className = "App">
     
     <Routes>

    
        <Route path='/' element={<HomePage />} />
  


     </Routes>
    </div>
  );
}