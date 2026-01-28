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
  const addTodo = (e)=>{
    //setTodos([...todos,e]);
    console.log(todos);
  }
  return (
    <div className="box">
      <h1 style={{padding:30}}>待辦事項</h1>
      <Item hand={handler} setTo={addTodo}/>
      {todos.map((todo)=>{
        return <Todo to ={todo}/>
      })}
    </div>
  );
}

export default Box;
