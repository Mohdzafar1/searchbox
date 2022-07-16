import React, { useState } from 'react';
import './App.css';
import Data from "./Data"


function App() {
  const[text,setText]=useState('')
    
   const changeHandler=(e)=>{
    setText(e.target.value)
   }
  
  return (
    <div className="container text-center">
    <div className="row">
      <div className="col-lg-4 pt-5">
      <input value={text} type="text" className="form-control" onChange={changeHandler}/>
        {
          Data.filter((val)=>{
          
            if(text==""){
              return val;
            }else if(val.name.toLowerCase().startsWith(text.toLowerCase())){
              return val;
            }

          }).map((value)=>{
            return(
              <h5 className="pt-5">{value.name}</h5>
            )
          })
        }
      </div>
    </div>
      
    </div>
  );
}

export default App;
