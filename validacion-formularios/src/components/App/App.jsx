import React, { useReducer } from "react";
import Form from "../Form/Form";
import "../App/App.css";
const initialState = {
  firstName: { value: '', error: null },
  lastName: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
  confirmPassword: { value: '', error: null }
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.field]: { ...state[action.field], value: action.payload }
      };
    case 'SET_ERROR':
      return {
        ...state,
        [action.field]: { ...state[action.field], error: action.payload }
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Form state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;