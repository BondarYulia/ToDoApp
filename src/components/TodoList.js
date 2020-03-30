import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, inProgress, reMove, deLeted }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onClickBtn={() => inProgress(todo.id)}
        onClickRem={() => reMove(todo.id)}
        onClickDel={() => deLeted(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    inprogress: PropTypes.bool.isRequired,
    remove: PropTypes.bool.isRequired,
    deleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  inProgress: PropTypes.func.isRequired,
  reMove: PropTypes.func.isRequired,
  deLeted: PropTypes.func.isRequired
}

export default TodoList
