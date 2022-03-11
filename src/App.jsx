import { useState } from 'react'
import './App.css'
import AddItem from './components/AddItem'
import ListItem from './components/ListItem'

function App() {
  //const [data, setData] = useState([])

  const data = [
    {
      id: '1',
      title: 'Casa',
      amount: 540.0,
      date: new Date(2025, 12, 7),
      type: 'despensa',
    },
  ]

  const dataHandler = (enteredData) => {
    console.log(enteredData)
  }

  return (
    <div className="App">
      <h1>Budget App</h1>
      <AddItem onDataHandler={dataHandler} />
      <ListItem items={data} />
    </div>
  )
}

export default App
