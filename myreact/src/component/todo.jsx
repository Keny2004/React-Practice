function Todo({ to: to, del: del }) {
  const delData = () => {
    console.log("del:", to);
    del(to);
  };
  return (
    <div className="todo">
      <div>{to}</div>
      <div className="butt">
        <button onClick={delData}>刪除</button>
        <button>編輯</button>
      </div>
    </div>
  );
}
export default Todo;
