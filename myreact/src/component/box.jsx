import { useState } from "react";
import Item from "./item";
import Todo from "./todo.jsx";
function Box() {
  const [todos,setTodos]=useState(['刷牙','曬衣服']);
  const handler = (newData)=>{
    console.log("副:",newData);
    setTodos(newData);
    console.log(todos);
  }
    console.log(todos);
  
  return (
    <div className="box">
      <h1 style={{padding:30}}>待辦事項</h1>
      <Item hand={handler}/>
      {todos.map((todo)=>{
        return <Todo to ={todo}/>
      })}
    </div>
  );
}

export default Box;
