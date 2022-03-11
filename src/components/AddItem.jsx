import { useState } from 'react'

const AddItem = (props) => {
  const [enteredType, setEnteredType] = useState()
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value)
    console.log(enteredType)
  }

  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value)
    console.log(enteredTitle)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    console.log(enteredAmount)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(new Date())
    console.log(enteredDate)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredData = {
      id: Math.random().toString(),
      type: enteredType,
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    }
    props.onDataHandler(enteredData)
  }

  return (
    <form onSubmit={submitHandler}>
      <select onChange={typeChangeHandler}>
        <option value="despensa">Despesa</option>
        <option value="ganho">Ganho</option>
      </select>
      <input
        type="text"
        placeholder="Descrição"
        onChange={titleChangehandler}
      />
      <input type="text" placeholder="Valor" onChange={amountChangeHandler} />
      <input type="date" onChange={dateChangeHandler} />
      <button>Adicionar</button>
    </form>
  )
}

export default AddItem
