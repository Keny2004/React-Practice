import { useState } from "react";
function Item({hand,setTo}) { 
  const [content,setContent] =useState('');
  const handleChange = (ee) => {
    console.log("目前輸入：", ee.target.value);
    setContent(ee.target.value); 
    hand(ee.target.value);
  };
  
  return (
    <form className="form">
      <input type="text" placeholder="請輸入待辦事項" value ={content} onChange={handleChange}/>
      <button type="submit">加入</button>
    </form>
  );
}

export default Item;
