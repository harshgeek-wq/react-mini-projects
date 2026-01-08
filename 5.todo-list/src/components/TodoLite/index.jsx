import { useState } from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodoList = [
  { id: 1, title: 'Practice Html & CSS' },
  { id: 2, title: 'Build dynamic features using Javascript' },
  { id: 3, title: "Use React to build the project and boost the app's built & performance" },
  { id: 4, title: 'Pickup Jenny from school' },
  { id: 5, title: 'Order a cake for surprise party' },
  { id: 6, title: 'Contact the electrician' },
]

function TodoLite() {
  const [todos, setTodos] = useState(initialTodoList)

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((eachTodo) => eachTodo.id !== id)
    setTodos(updatedTodos)
    
  }

  return (
    <div className="todo-card">
      <h1 className="heading">Todo Lite+</h1>

      <ul className="todo-list">
        {todos.map((eachTodo) => (
          <TodoItem
            key={eachTodo.id}
            todoDetails={eachTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoLite
