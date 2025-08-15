import { useState } from "react";

export function CreateTodo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return <div>
    <input style={{
      padding : 10,
      margin : 10
    }}
      type="text" placeholder="title" onChnage ={function(e){
        const value = e.target.value;
        setTitle(e.target.value);
      }}></input><br/>
    <input  style={{
      padding : 10,
      margin : 10
    }}

  type="text" placeholder="description" onChange={function(e){
    const value = e.target.description;
    setDescription(e.target.value);
  }}></input><br/>
    <button style={{
      padding : 10,
      margin : 10
    }} onClick={() => {
        fetch("httpls://localhost:3000/todo", {
          method : "POST",
          body : JSON.stringify({
            title : title,
            description : description
          }),

          headers : {
            "content-type" : "application/json"
          }
        })
          .then(async function(res){
            const json = res.json()
            alert("todo added!");
          })
    }}
    >Add a todo</button>
  </div>
}
