
import './App.css';
import './theme.css'
import { useEffect, useState } from 'react';

function App() {
  const [state,setState]=useState(false);
  const con=state?"black":"white";
   const change=()=>{
    setState(val=>!val);
  }
 
  useEffect(() => {
    
    document.body.style.backgroundColor = con;
  },[con]);
  
    

  return (
    <div className='App'>
      <h1 style={{color:"tomato"}}> Change The Theme</h1>
      <button onClick={change}>Click Me</button>
    </div>
  );
}

export default App;

