import { useState } from "react";
function Item({hand}) { 
  const [content,setContent] =useState('');
  const handleChange = (ee) => {
    console.log("目前輸入：", ee.target.value);
    setContent(ee.target.value); 
    
  };
  const click =(eee)=>{
    hand(content);
    setContent('');
    eee.preventDefault();
  }
  return (
    <form className="form">
      <input type="text" placeholder="請輸入待辦事項" value ={content} onChange={handleChange}/>
      <button type="submit" onClick={click}>加入</button>
    </form>
  );
}

export default Item;
