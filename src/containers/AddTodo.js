import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input placeholder="Your ToDo" ref={node => input = node} />
        <button type="submit">
          Add ToDo
        </button>
        <p className="main-p">
          To put your task in "In progress" or move it to bin, click the appropriate button.
          <br />
          You can also undo these actions.
          <br />
          To mark the task as "Completed" you just have to click on it.
        </p>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
