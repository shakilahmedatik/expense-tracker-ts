import { useState } from 'react'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'aaa',
      amount: 10,
      category: 'Utilities',
    },
    {
      id: 2,
      description: 'bbb',
      amount: 10,
      category: 'Utilities',
    },
    {
      id: 3,
      description: 'ccc',
      amount: 10,
      category: 'Utilities',
    },
    {
      id: 4,
      description: 'Movies',
      amount: 10,
      category: 'Entertainment',
    },
  ])
  const visibleExpenses = selectedCategory
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses
  return (
    <div className='p-5'>
      <div className='mb-5'>
        <ExpenseForm
          onSubmit={expense =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={category => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        onDelete={id =>
          setExpenses(expenses.filter(expense => expense.id !== id))
        }
        expenses={visibleExpenses}
      />
    </div>
  )
}

export default App
