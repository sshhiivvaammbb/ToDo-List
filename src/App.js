
import { useState } from 'react';
import Todolists from './Todolists';



function App() {

const[inputList , setInputList] = useState("");
const[Items , setItems] = useState([]);

const itemEvent = (event) => {

  setInputList(event.target.value)

};

const listOfItems = () => {

  setItems ( (oldItems) => {
    return [...oldItems , inputList];
  } )
  setInputList("");
};

  return (
    <div className="main_div">

      <div className='center_div'> 
      <br/>

          <h1> ToDo List </h1>
          <br/>

          <input type="text" placeholder='Add an item' value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
             
             {Items.map( (itemval) => {
              
               return <Todolists text={itemval}/>
             })}

          </ol>

       </div>
    
          
       
    </div>
  );
}

export default App;
