import * as actionTypes from "../actions/actionTypes";


const addAction = (todoTask) => {
  console.log('todotask', todoTask)
  return {
    type: actionTypes.ADD_TASK,
    payload: todoTask
  }
}

export { addAction };