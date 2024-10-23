import React, { Fragment, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/di";

const ToDoApp = () => {
  let [inputValue, setValue] = useState("");
  let [listItems, setListItem] = useState([]);
  let[EditIndex, setEditIndex]=useState(null);

  let handleChange = (event) => {
    setValue(event.target.value);
    // console.log(inputValue);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  let handleAdd = () => {
    if (inputValue != "") {
      if(EditIndex!==null){
        listItems[EditIndex]=inputValue;
        setEditIndex(null)
      }
      else{
      setListItem([...listItems, inputValue]);
      
    }
  
  
  }
  setValue("");
  
  };
  let handleClear = () => {
    setListItem([]);
  };

  let handleEdit = (id) => {
    setEditIndex(id)
    setValue(listItems[id])
   
  };
  let handleDelete = (id) => {
    let newList = listItems.filter((val, index) => {
      return id !== index;
    });
    setListItem(newList);
  };
  return (
  <>
    
    <center><div className="container">
    <img src="https://i.pinimg.com/originals/cb/80/6b/cb806b41e70e6b6f4334a6c6a1668a46.gif" alt="" />
    <h1>
      To-Do-App
    </h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="inputValue"
        name="inputValue"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type Something here......"
      />
      &nbsp;&nbsp;
      <button value="submit" onClick={handleAdd}>
        {EditIndex!==null?"Update":"Add"}
      </button>
    </form>
    <section>
      {listItems.map((val, index) => {
        return (
          <Fragment key={index}>
            

            
              {/* <input type="checkbox" name="" id="check" /> */}
              <p>
              
              <input type="checkbox" id="cbtest-19" />
                {val}</p>
            <div className="parent">
              
            <button onClick={()=>handleEdit(index)} className="edit">Edit</button>
            <button onClick={() => handleDelete(index)} className="delete">Delete</button>

            </div>
          </Fragment>
        );
      })}
    </section>
    <br />
    <br />
    <center><button onClick={handleClear}>Clear All</button></center>
  </div></center></>
  );
};

export default ToDoApp;
