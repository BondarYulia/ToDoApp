import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { inProgress } from '../actions'
import { reMove } from '../actions'
import { deLeted } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.filter(t => (!t.deleted) && (!t.remove))
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => (t.completed) && (!t.deleted) && (!t.remove))
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => (!t.inprogress) && (!t.completed) && (!t.remove) && (!t.deleted))
    case VisibilityFilters.SHOW_PROGRESS:
      return todos.filter(t => (t.inprogress) && (!t.completed) && (!t.deleted) && (!t.remove)) 
    case VisibilityFilters.SHOW_REMOVE:
      return todos.filter(t => (t.remove) && (!t.deleted))
    case VisibilityFilters.SHOW_DELETED:
      return todos.filter(t => t.deleted)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => {
  return {
    inProgress: id => dispatch(inProgress(id)),
    reMove: id => dispatch(reMove(id)),
    deLeted: id => dispatch(deLeted(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    dispatch
  }
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
