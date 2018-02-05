import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import loggerMiddleware from "../middleware/loggerMiddleware";
import routerMiddleware from "../middleware/routerMiddleware";
import themeReducer from "../reducers/themeReducer";
import todosReducer from "../reducers/todosReducer";

const middlewares = applyMiddleware(
  routerMiddleware,
  loggerMiddleware,
);

const rootReducer = combineReducers<State, Action>({
  router: routerReducer,
  theme: themeReducer,
  todos: todosReducer,
});

const enhancers = compose(middlewares);

function configureStore(initialState: Partial<State>) {
  return createStore(
    rootReducer,
    initialState,
    enhancers,
  );
}
export default configureStore;
