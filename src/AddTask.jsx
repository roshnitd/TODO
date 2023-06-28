import React, { useReducer, useRef } from 'react'

const reducer =(state,action)=>{
  switch(action.type){
    case 'ADD_TASK':
    return [...state,{task:action.payload.task,id:action.payload.id}];
    case 'DELETE' :
      const id =action.payload.id
      return state.filter(e=>e.id!=id)
      

      default:
        return state

  }
}

const AddTask = () => {
  const[state,dispacth]=useReducer(reducer,[])
  const myreff = useRef(null)


  const Add =()=>{
    const add = myreff.current.value 
  
    dispacth({type:'ADD_TASK',payload:{task:add,id:Date.now()}})
    console.log(state);
        
    
  }
  const remove=(e)=>{
    const id= e.target.id
    dispacth({type:'DELETE',payload:{id}})
    console.log(state);

  }
  return (
    <>
    <div className="input-container">
    <input type="text" ref={myreff} />
    <button onClick={Add}>ADD</button>
   

    
    </div> 
    <ul>
    {state.map((e)=>(
      <li>{e.task}
      <button id={e.id} onClick={remove} >remove</button></li>

      
      
    ))}
    </ul>
    </>

  );
}

export default AddTask;