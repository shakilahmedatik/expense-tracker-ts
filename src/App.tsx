import { useState } from 'react'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Battery',
      amount: 18,
      category: 'Utilities',
    },
    {
      id: 2,
      description: 'Battery2',
      amount: 18,
      category: 'Utilities',
    },
    {
      id: 3,
      description: 'Potatoes',
      amount: 55,
      category: 'Groceries',
    },
    {
      id: 4,
      description: 'Potatoes2',
      amount: 55,
      category: 'Groceries',
    },
    {
      id: 5,
      description: 'Movies',
      amount: 30,
      category: 'Entertainment',
    },
    {
      id: 6,
      description: 'Movies1',
      amount: 30,
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
