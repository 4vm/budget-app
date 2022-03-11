const Item = ({ date, title, amount, type }) => {
  const day = date.toLocaleString('pt-BR', { day: '2-digit' })
  const month = date.toLocaleString('pt-BR', { month: 'short' })
  const year = date.getFullYear()

  return (
    <div>
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div>
        <h2>{title}</h2>
        <div>{amount}</div>
        <div>{type}</div>
      </div>
    </div>
  )
}

export default Item
