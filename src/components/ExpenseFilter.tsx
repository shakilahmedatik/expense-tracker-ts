import categories from '../categories'
interface Props {
  onSelectCategory: (category: string) => void
  defaultCat: string
}

const ExpenseFilter = ({ onSelectCategory, defaultCat }: Props) => {
  return (
    <select
      className='form-select'
      defaultValue={defaultCat}
      onChange={event => onSelectCategory(event.target.value)}
    >
      <option value=''>All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default ExpenseFilter
