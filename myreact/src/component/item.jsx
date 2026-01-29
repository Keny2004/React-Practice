import { useState } from "react";

function Item({ hand }) {
  const [content, setContent] = useState("");
  const handleChange = (ee) => {
    const usertext = ee.target.value;
    console.log("目前輸入:", usertext);
    setContent(usertext);
  };
  const click = (eee) => {
    eee.preventDefault();
    console.log("傳送出的文字:", content);
    hand(content);
    setContent("");
  };
  return (
    <form className="form">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={content}
        onChange={handleChange}
      />
      <button type="submit" onClick={click}>
        加入
      </button>
    </form>
  );
}

export default Item;
