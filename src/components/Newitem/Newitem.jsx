import { useEffect, useState } from 'react';
import './Newitem.css'


const priority=['Low','Medium','High'];


const Newitem = (props) => {
    
    const {addItem, editState, editItem} = props;
    
    const[data,setData]=useState('');
    const[pri,setPri]=useState('Low');

    
    const isEdit =Boolean(editState._id);


    useEffect(()=>{
        if(editState._id){
            setData(editState.title)
            setPri(editState.priority)
        }
    },[editState])

    const handleInputChange=(e)=>{
        setData(e.target.value)
    }
    const handlePriChange=(e)=>{
        setPri(e.target.value)
    }
    const handleSave=()=>{
        if(!data){
            return
        }

        const obj ={
            title:data,
            priority:pri
        }
        if(isEdit){
            obj._id = editState._id;
            editItem(obj);
        }else{
         addItem(obj);
        }
        setData('');
        setPri('Low');
    }
    return ( 
        <div className="new-item-card">
            <div className="check">
            <span className="material-symbols-outlined pointer">check_box_outline_blank</span>
            </div>
            <div className='formcontainer'>
            <input type="text" placeholder='Add task' value={data} onChange={handleInputChange}></input>
           
            {data&&(
                <div className='formcontainer'> 
            <div className='pricontainer'>
                <button className='low' value='Low' onClick={handlePriChange}>Low</button>
                <button className='medium' value='Medium' onClick={handlePriChange}>Medium</button>
                <button className='high' value='High'onClick={handlePriChange}>High</button>
            </div>
            <div className='buttoncontainer'>
                <button className='primary' onClick={handleSave}>Save</button>
                <button className='secondary' onClick={()=>setData('')}>Clear</button>
            </div>
                </div>
            )}
             </div>
            </div>
   
     );
}
 
export default Newitem;