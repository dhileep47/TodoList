import { useState } from "react";
import "./TodolistItem.css"
const TodolistItem = (props) => {
    const {item, onDelete, onEdit}=props;
    const {title,priority,id}=item;



    const [isChecked, setChecked]=useState(false)

    const setTrue=()=>{
        return(
            setChecked(true)
        )
    }
    const setFalse=()=>{
        return(
            setChecked(false)
        )
    }




    return ( 
        <div className={`item-card ${priority}`}>
            {isChecked ? ( <span className="material-symbols-outlined pointer" onClick={setFalse}>select_check_box</span>) : (<span className="material-symbols-outlined pointer" onClick={setTrue}>check_box_outline_blank</span>)}
            <div className={`card-title ${isChecked && 'strike'}`}>{title}</div>
            <div className={`badge ${priority}`} >{priority}</div>
         
            <span className="material-symbols-outlined pointer edit-icon" onClick={()=>onEdit(item)}>edit</span>
         
            <span className="material-symbols-outlined pointer" onClick={()=>onDelete(item._id)} >delete</span>
        </div>

     );
}
 
export default TodolistItem;