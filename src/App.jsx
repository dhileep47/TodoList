import './App.css';
import Newitem from './components/Newitem/Newitem';
import Todolist from './components/TodoList/Todolist';
import { useEffect, useState } from "react";



const App = () => {

  const [list,setList]=useState([]);
  const [editState ,setEditState]=useState((''));
 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/v2/todo/get/All')
      const json = await response.json()
      if (response.ok) {
        setList(json.data);
      }
    }
    fetchData();
  }, [])



  const addItem = (item) => {
    fetch("http://localhost:8000/api/v2/todo", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
      setList((prev) => [...prev,item]);
    });
  };



    const editItem=(updatedItem)=>{

      const updatedList=list.map((item)=>{
        if(item._id === updatedItem._id){
          fetch(`http://localhost:8000/api/v2/todo/update/${item._id}`,{
          method: "PUT",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedItem),})
          .then(() => {
              setList([...updatedList])          
          })}
          return (item._id === updatedItem._id)? updatedItem : item;
      })

    }


    const triggerEdit=(item)=>{
      console.log("here");
      setEditState(item);
    }



    const deleteItem = async(id)=>{
      console.log(id);
        const response = await fetch(`http://localhost:8000/api/v2/todo/${id}`,{method: 'DELETE'});
        if (response.ok) {
          console.log("Delted");
          const response = await fetch('http://localhost:8000/api/v2/todo/get/All')
          const json = await response.json()
          if (response.ok) {
            setList(json.data);
          }
          console.log(list);
        } else {
          console.log(" not Delted");
        }
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


