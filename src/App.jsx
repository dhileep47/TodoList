import './App.css';
import Newitem from './components/Newitem/Newitem';
import Todolist from './components/TodoList/Todolist';
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';


const DEFAULT_LIST=[{
  id: nanoid(),
  title: 'Study JS',
  priority: 'High'
},{ 
  id: nanoid(),
  title: 'Study CSS',
  priority: 'Low'
},{
  id: nanoid(),
  title: 'Study HTML',
  priority: 'Medium'
}]


const App = () => {

  const [list,setList]=useState(DEFAULT_LIST);
  const [editState ,setEditState]=useState((''));



    const addItem=(item)=>{
          setList((prev)=>[item, ...prev])
        }

    const editItem=(updatedItem)=>{
      const updatedList=list.map((item)=>
      (item.id === updatedItem.id)? updatedItem : item)
      setList([...updatedList])

    }


    const triggerEdit=(item)=>{
      setEditState(item);
    }



    const deleteItem = (id)=>{
        const filterList = list.filter((item)=> item.id !== id)
        setList([...filterList])
      }

    

  return (  
    <div className='app'>
      <h1 className='title'>Todo List</h1>
      <Newitem addItem={addItem} editState={editState} editItem={editItem}/>
      <Todolist list={list} deleteItem={deleteItem} triggerEdit={triggerEdit} />
    </div>
  );
}
 
export default App;


