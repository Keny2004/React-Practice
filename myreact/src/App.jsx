function MyComponent() {  
  return (
    <h1>Hello World</h1>
  )
}
function Test() {
  return (
    <h2>hi</h2>
  )
}

function App() {
  return (
    <>
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <Test />
    </>
  )
}

export default App
