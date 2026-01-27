import { useState } from "react";
function Item() {
  const [content,setCotent] =useState('');
  return (
    <form className="form">
      <input type="text" placeholder="   請輸入待辦事項" />
      <button type="submit">加入</button>
    </form>
  );
}

export default Item;
