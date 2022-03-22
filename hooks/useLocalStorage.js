import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const { error, loading, item } = state;

  const onError = error => dispatch({ type: actionTypes.error, payload: error });

  const onSuccess = parsedItem => dispatch({ type: actionTypes.success, payload: parsedItem });

  const onSave = newItem => dispatch({ type: actionTypes.save, payload: newItem });

  React.useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      onSuccess(parsedItem);
    } catch (error) {
      onError(error);
    }
  }, []);

  const saveItem = newItem => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  return { item, saveItem, loading, error };
}

const initialState = () => ({
  loading: true,
  error: false,
  item: null,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: true },
  [actionTypes.success]: {
    ...state,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: { ...state, item: payload },
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export { useLocalStorage };
