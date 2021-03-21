import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  };
};

const useInputs = initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setState = ({ target }) => {
    dispatch(target);
  };
  return [state, setState];
};

export default useInputs;
