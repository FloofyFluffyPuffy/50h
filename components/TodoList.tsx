import React from 'react'
import { useState } from 'react'
const TodoList = () => {
    const [todo, setTodo] = useState<string>('')
    const [todoList, setTodoList] = useState<string[]>([])
  return (
    <div>
        {todoList.map((singleTodo) => {
           return <p>{singleTodo}</p>
        })
        }
         <form action="submit" onSubmit={(e) => {
            e.preventDefault()
            setTodoList([...todoList, todo])
            setTodo('')
         }}>
            <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
            <button type='submit'>Submit</button>
         </form>
    </div>
  )
}

export default TodoList