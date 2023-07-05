// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload: payload,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: 1,
      isDone: false,
      title: "리액트 공부하기",
      content: "리액트 기초 강의 듣기",
    },
    {
      id: 2,
      isDone: true,
      title: "TIL 작성하기",
      content: "오늘 한 것 정리해보기",
    },
  ],
};

// 리듀서
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isDone: action.payload.isDone,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
