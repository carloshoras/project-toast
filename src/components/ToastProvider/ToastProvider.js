import React from 'react';

export const ToastContext = React.createContext();
import { useState } from 'react';


function ToastProvider({ children }) {


  const [toasts, setToasts] = useState([])

  

  function createToast(message, variantSelected) {
    const nextToasts = [...toasts, { message: message, variant: variantSelected, id: crypto.randomUUID() }]
    setToasts(nextToasts)
  }
  function handleDismissToast(id) {
    const nextToasts = toasts.filter(toast => toast.id !== id)
    setToasts(nextToasts)
  }

  const value = {
    toasts,
    createToast,
    handleDismissToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
