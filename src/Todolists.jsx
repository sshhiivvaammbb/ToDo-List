import React from 'react'

 const Todolists = (props) => {

  

  
  return (
    <>
    <div className='todo_style'>
      < i 
      className="fa-fa-times"
       aria-hidden="true" 
       
          />
    <li> {props.text}</li>

    <button onClick={()=> { props.onSelect(props.id)}}>-</button>

    
    
    
    </div>
    
    </>
  )
  
};


export default Todolists;
