import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Nav from "./Nav";
import { BsPlusLg } from "react-icons/bs";

const Home = () => {
  let [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => {setUser(result.data)
    
        console.log(result,"*******",result.data);
    
    })
    
    
      .catch((error) => console.log(error));
  }, []);
 

  // let handleDelete=(id)=>{
  //     axios.delete("http://localhost:3000/users"+id)
  //     .then(()=>{
  //         console.log("deleted scuccesfully");
  //         window.location.reload()
  //     })
  // }
  return (
    <div className={user.length!=0?'org':'minion'}>
    {/* <Nav/> */}

      <button className="addButton glow-on-hover" title='Tap to add a person'>
        <Link to="/create/:id"><BsPlusLg size='2.5rem' color="blue" className="plus" /></Link>
      </button>
      <table border={2} cellPadding={10} cellSpacing={10} rules="all">
        {user.length==0?'':
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Place</th>
            <th>Age</th>
            <th>Dob</th>
          </tr>
        </thead>}
        <tbody>
          {user.map((val,index) => {
            let handleDelete = (id) => {
              axios.delete("http://localhost:3000/users/"+id)
              .then(() => {
                
                console.log("deleted scuccesfully");
                window.location.reload();
              });
              
    
            };
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>{index+1}</td>
                  <td>{val.name}</td>
                  <td>{val.place}</td>
                  <td>{val.age}</td>
                  <td>{val.dob}</td>
                  <td>
                    <button className="read">
                      <Link to={`/read/${val.id}`}>Read</Link>
                    </button>
                  </td>
                  <td>
                    <button className="edit read">
                      <Link to={`/update/${val.id}`}>edit</Link>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(val.id)} className="delete read">delete</button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
