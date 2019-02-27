import * as React from 'react'
import { ITodo } from './types'

export interface IListProps {
  todos: Array<ITodo>
  onTodoComplete?: (id: string) => void
}

export interface ITodoProps {
  todo: ITodo
  onChange: (id: string) => void
}

const Todo = (props: ITodoProps) => {
  const { todo, onChange } = props
  return (
    <button
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid #fafafa',
        padding: '1em',
        margin: '1em',
        opacity: todo.completed ? 0.2 : 1,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: '#fff',
        width: '200px'
      }}
      onClick={() => onChange(todo.id)}
    >
      <h2>{todo.title}</h2>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onChange(todo.id)}
      />
    </button>
  )
}

class TodoList extends React.Component<IListProps, object> {
  handleTodoChange = (id: string) => {
    if (this.props.onTodoComplete) {
      this.props.onTodoComplete(id)
    }
  }

  render() {
    const { todos } = this.props

    return (
      <div>
        {todos.map(todo => (
          <Todo todo={todo} onChange={this.handleTodoChange} key={todo.id} />
        ))}
      </div>
    )
  }
}

export default TodoList
