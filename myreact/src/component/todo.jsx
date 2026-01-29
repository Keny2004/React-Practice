function Todo({ to }) {
  return (
    <div className="todo">
      <div>{to}</div>
      <button>刪除</button>
      <button>編輯</button>
    </div>
  );
}
export default Todo;
