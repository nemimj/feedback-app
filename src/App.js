import Header from "./components/Header.jsx";

function App() {
  // empty tag is called fragment tag

  return (
    <>
      <Header text="hello world!"></Header>
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;
