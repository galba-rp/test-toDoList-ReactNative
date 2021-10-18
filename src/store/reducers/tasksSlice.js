import * as actionTypes from "../actions/actionTypes";


const todos = [];

let key = todos.slice(-1) | 0;

const todosReducer = (state = todos, action) => {
  let key = (state.slice(-1).key ? (state.slice(-1).key + 1) : 0);
  let data = action.payload;
  let tod = { key: key, todo: data }

  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [...state, tod];
    default:
      return state;
  }

}

export default todosReducer;