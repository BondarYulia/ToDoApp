const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          inprogress: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      case 'IN_PROGRESS':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, inprogress: !todo.inprogress}
          : todo
      )
      
      case 'REMOVE':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, remove: !todo.remove}
            : todo
        )

        case 'DELETED':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, deleted: !todo.deleted}
            : todo
        )
      
    default:
      return state
  }
}

export default todos
