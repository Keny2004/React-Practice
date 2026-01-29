function Todo({ to:to,del:del }) {
  return (
    <div className="todo">
      <div>{to}</div>
      <div className="butt">
        <button onClick={del}>刪除</button>
        <button>編輯</button>
      </div>
    </div>
  );
}
export default Todo;
