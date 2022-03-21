import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const { sincronizedItem, error, loading, item } = state;

  const onError = error => dispatch({ type: actionTypes.error, payload: error });

  const onSuccess = parsedItem => dispatch({ type: actionTypes.success, payload: parsedItem });

  const onSave = newItem => dispatch({ type: actionTypes.save, payload: newItem });

  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

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
  }, [sincronizedItem]);

  const saveItem = newItem => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

const initialState = () => ({
  loading: true,
  error: false,
  sincronizedItem: true,
  item: null,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: true },
  [actionTypes.success]: {
    ...state,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: { ...state, item: payload },
  [actionTypes.sincronize]: { ...state, loading: true, sincronizedItem: false },
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export { useLocalStorage };
