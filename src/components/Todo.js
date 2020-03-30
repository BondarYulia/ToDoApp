import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, inprogress, remove, deleted, text, onClickBtn, onClickRem, onClickDel }) => (
  <div className={inprogress ? 'inprogress' : ''}>
  <div className={remove ? 'remove' : ''}>
  <div className={deleted ? 'deleted' : ''}>
  <div className={completed ? 'completed' : ''}>

  <div className='task' onClick={onClick}>&nbsp;{text}</div>
     
    <button onClick={onClickBtn} className='progress_btn'>In progress</button>
    <button onClick={onClickRem} className='remove_btn'>Move to bin</button>
    <button onClick={onClickDel} className='deleted_btn'>Delete</button>
    </div>
  </div>
  </div>
  </div>
  
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClickBtn: PropTypes.func.isRequired,
  onClickRem: PropTypes.func.isRequired,
  onClickDel: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  inprogress: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  remove: PropTypes.bool.isRequired
}

export default Todo
