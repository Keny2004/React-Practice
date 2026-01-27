import Item from "./item";
function Box() {
  return (
    <div className="box">
      <h1 style={{padding:30}}>待辦事項</h1>
      <Item />
    </div>
  );
}

export default Box;
