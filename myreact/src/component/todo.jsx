function Todo({ to: to, del: del, edit: edit }) {
  let isFinished = true;
  const delData = () => {
    console.log("del:", to);
    del(to);
  };
  const editData=()=>{
    console.log("edit:", to);
    edit(to);
  }
  const finish=()=>{
    if(isFinished){
      document.getElementById(to).style.textDecoration='line-through';
      //document.getElementById(todo).style.backgroundColor='lightgray';
    }else{
      document.getElementById(to).style.textDecoration='none';
      //document.getElementById(todo).style.backgroundColor='transparent';
    }
    isFinished = !isFinished;
    console.log(isFinished);
  }
  return (
    <div id='todo' className="todo">
      <div id={to} onClick={finish}>{to}</div>
      <div className="butt">
        <button onClick={delData}>刪除</button>
        <button onClick={editData}>編輯</button>
      </div>
    </div>
  );
}
export default Todo;
