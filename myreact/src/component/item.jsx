// 這裡不需要 useState 了，因為狀態在 Box 裡
function Item({ hand, currText, setCurrText }) {
  
  const handleChange = (ee) => {
    const usertext = ee.target.value;
    // 當使用者打字時，通知 Box 更新狀態
    setCurrText(usertext);
  };

  const click = (eee) => {
    eee.preventDefault();
    if (currText !== "") {
      // 呼叫 Box 的新增函數
      hand(currText);
      // 注意：清空的動作我們在 Box 的 handler 做掉了，這裡不用做
    }
  };
  
  return (
    <form className="form">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={currText} // 綁定父組件傳來的文字
        onChange={handleChange}
      />
      <button type="submit" onClick={click}>
        加入
      </button>
    </form>
  );
}

export default Item;