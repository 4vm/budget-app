import { useState } from 'react'

const AddItem = () => {
  const [enteredType, setEnteredType] = useState()
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')

  return (
    <form onSubmit>
      <select>
        <option>Despesas</option>
        <option>Proventos</option>
      </select>
      <input type="text" placeholder="Descrição" />
      <input type="text" placeholder="Valor" />
      <button>Adicionar</button>
    </form>
  )
}

export default AddItem
