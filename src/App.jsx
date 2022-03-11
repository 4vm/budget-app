import './App.css'
import AddItem from './components/AddItem'

function App() {
  const dataHandler = (enteredData) => {
    console.log(enteredData)
  }

  return (
    <div className="App">
      <h1>Budget App</h1>
      <AddItem onDataHandler={dataHandler} />
    </div>
  )
}

export default App
