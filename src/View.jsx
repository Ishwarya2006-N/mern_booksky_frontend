import React, { useState } from 'react'
import axios from 'axios'
const View = () => {
    const[box,setbox]=useState(false);
    const[title,settitle]=useState('');
    const[author,setauthor]=useState('');
    const[description,setdescription]=useState('');

    const handlecreate=async(t,a,d)=>{
      axios.post('https://mern-booksky-backend.onrender.com',{"title":t,"author":a,"description":d})
      .then(console.log("created"));
      setbox(false)
      settitle('')
      setauthor('')
      setdescription('')
      .catch(err=>console.log(err))
    }
  return (
    <div>
        <div className='bottom_btn'>
          <button onClick={()=>{setbox(true)}}>+</button>
        </div>
        {box&&
        <div  className='popup-overlay'>
            <div className="popup-box">
                <h2>Add Book</h2>
                <h2><input type="text" value={title} placeholder='Book Title' onChange={(e)=>{settitle(e.target.value)}} className='pop-title'/></h2>
                <h2><input type="text" value={author} placeholder='Book Author' onChange={(e)=>{setauthor(e.target.value)}} className='pop-author'/></h2>
                <h5><textarea value={description} placeholder='Short Description' onChange={(e)=>{setdescription(e.target.value)}} className='pop-description'></textarea></h5>
                <button className='pop-add' onClick={()=>handlecreate(title,author,description)}>Add</button>
                <button className='pop-del' onClick={()=>{setbox(false)}}>Delete</button>
            </div>
        </div>
        }
        
    </div>
  )
}

export default View;