import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import { ITodo } from './components/types'

import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'
import { inject, observer } from 'mobx-react'
import { Store } from './Store'

interface IProps {
  store: typeof Store.Type
}
interface IState {
  todos: Array<ITodo>
}

@inject('store')
@observer
class App extends React.Component<IProps, IState> {
  completeTodo = (id: string): void => {
    this.props.store.checkTodo(id)
  }

  createTodo = (todo: ITodo) => {
    this.props.store.addTodo(todo)
  }

  render() {
    const { activeTodos, completedTodos } = this.props.store

    return (
      <div className="App">
        <header className="App-header">
          <CreateTodo onCreate={this.createTodo} />
          <TodoList todos={activeTodos} onTodoComplete={this.completeTodo} />
          <TodoList todos={completedTodos} onTodoComplete={this.completeTodo} />
        </header>
      </div>
    )
  }
}

export default App
