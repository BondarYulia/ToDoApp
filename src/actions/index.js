let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const inProgress = id => ({
  type: 'IN_PROGRESS',
  id
})

export const reMove = id => ({
  type: 'REMOVE',
  id
})

export const deLeted = id => ({
  type: 'DELETED',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_PROGRESS: 'SHOW_PROGRESS',
  SHOW_REMOVE: 'SHOW_REMOVE',
  SHOW_DELETED: 'SHOW_DELETED'
}
