import { useState } from "react";
import Item from "./item";
import Todo from "./todo.jsx";

function Box() {
  const [todos, setTodos] = useState(["刷牙", "曬衣服"]);
  // 1. 新增：由 Box 來管理輸入框的文字
  const [inputValue, setInputValue] = useState("");

  // 新增待辦事項
  const handler = (newData) => {
    // 簡單的防呆，如果是空字串就不加入
    if (!newData) return; 
    
    const newTodos = [...todos, newData];
    setTodos(newTodos);
    // 加入後清空輸入框
    setInputValue(""); 
  };

  const delTodo = (delData) => {
    const newTodos = todos.filter((todo) => todo !== delData);
    setTodos(newTodos);
  };

  // 2. 編輯功能：設定輸入框文字 + 刪除列表項目
  const editTodo = (editData) => {
    console.log("編輯的資料:", editData);
    
    // (A) 把文字填入輸入框狀態
    setInputValue(editData);
    
    // (B) 刪除原本位置的文字 (直接呼叫上面的刪除邏輯即可)
    delTodo(editData);
  };
  
  return (
    <div className="box">
      <h1 style={{ padding: 30 }}>待辦事項</h1>
      
      {/* 3. 把 inputValue 和 setInputValue 傳給 Item */}
      {/* 這裡我們不需要再傳 edit prop 了，因為資料由 Box 控制 */}
      <Item 
        hand={handler} 
        currText={inputValue} 
        setCurrText={setInputValue}
      />
      
      {todos.map((todo, index) => {
        // 建議加上 key，這裡暫時用 index 或 todo 字串
        return <Todo key={index} to={todo} del={delTodo} edit={editTodo}/>;
      })}
    </div>
  );
}

export default Box;