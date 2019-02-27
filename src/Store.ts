import { types, Instance } from 'mobx-state-tree'

export type ITodo = Instance<typeof Todo>

const Todo = types.model('Todo', {
  id: '',
  title: '',
  completed: false
})

export const Store = types
  .model('Store', {
    todos: types.array(Todo)
  })
  .actions(self => ({
    addTodo(todo: ITodo): void {
      self.todos.push(todo)
    },
    checkTodo(todoId: string): void {
      const todo = self.todos.find(t => t.id === todoId)
      if (!todo) {
        throw new Error('Todo not found')
      }

      todo.completed = !todo.completed
    }
  }))
  .views(self => ({
    get completedTodos(): Array<ITodo> {
      return self.todos.filter(todo => todo.completed)
    },
    get activeTodos(): Array<ITodo> {
      return self.todos.filter(todo => !todo.completed)
    }
  }))

export default Store.create({})
