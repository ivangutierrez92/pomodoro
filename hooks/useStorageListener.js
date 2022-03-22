import React from 'react';

function useStorageListener(sincronize, itemName) {
  const [storageChange, setStorageChange] = React.useState(false);
  window.addEventListener('storage', e => {
    if (e.key === itemName) {
      setStorageChange(true);
    }
  });
  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };
  return { show: storageChange, toggleShow };
}

export { useStorageListener };
