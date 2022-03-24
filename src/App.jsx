import { useState } from 'react'
import './App.css'
import AddItem from './components/AddItem'
import ListItem from './components/ListItem'

function App() {
  const [data, setData] = useState([])

  const dataHandler = (enteredData) => {
    setData((prevData) => {
      return [enteredData, ...prevData]
    })
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Budget App</h1>
      <AddItem onDataHandler={dataHandler} />
      {data && <ListItem items={data} />}
    </div>
  )
}

export default App
