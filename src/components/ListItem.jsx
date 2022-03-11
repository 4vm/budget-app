import Item from './Item'

const ListItem = ({ items }) => {
  return items.map((item) => (
    <Item
      key={item.id}
      date={item.date}
      title={item.title}
      amount={item.amount}
      type={item.type}
    />
  ))
}

export default ListItem
