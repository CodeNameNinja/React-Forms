import SimpleInput from './components/SimpleInput';

function App() {
  const onAddHandler = (event) => {
    console.log(event);
  }
  return (
    <div className="app">
      <SimpleInput onAdd={onAddHandler} />
    </div>
  );
}

export default App;
