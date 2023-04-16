
import TodolistItem from "./TodolistItem/TodolistItem";

const Todolist = (props) => {

    const {list, deleteItem, triggerEdit}=props;

    
    if(list.length <=0){
        return(
            <center>No tasks to do!</center>
        )
    }
    return ( 
        <>
        {
            list.map((item,index)=>{
            return(
                <div key={index}>
                    <TodolistItem 
                    item={item} 
                    onDelete={deleteItem}
                    index={index}
                    onEdit={triggerEdit}
                    /> 
                </div>
                )
            })
        }
        </>
        );
}
 
export default Todolist;