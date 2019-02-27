import React, { useState, ChangeEvent } from 'react'

import { ITodo } from './types'

export interface IProps {
  onCreate: (todo: ITodo) => void
}

const CreateTodo: React.SFC<IProps> = props => {
  const [title, setTitle] = useState('')

  return (
    <input
      type="text"
      value={title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value)
      }
      placeholder="Have some food..."
      onKeyUp={(event: any) => {
        if (event.keyCode === 13) {
          const todo: ITodo = {
            id: Date.now().toLocaleString(),
            title: title,
            completed: false
          }
          props.onCreate(todo)
          setTitle('')
        }
      }}
    />
  )
}

export default CreateTodo
