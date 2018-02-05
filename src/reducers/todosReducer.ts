import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, CLEAR_MARKED } from '../constants/ActionTypes';

export interface Todo{
  id: number;
  mamrked: boolean;
  text: string;
}

export type TodosState = Todo[];

const initialState: TodosState = [];

export default function todos(state = initialState, action: RootAction) {
  switch (action.type) {
    case ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        marked: false,
        text: action.text,
      }, ...state];

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo =>
        (todo.id === action.id ?
          { ...todo, text: action.text } :
          todo));

    case MARK_TODO:
      return state.map(todo =>
        (todo.id === action.id ?
          { ...todo, marked: !todo.marked } :
          todo));

    case CLEAR_MARKED:
      return state.filter(todo => todo.marked === false);

    default:
      return state;
  }
}
