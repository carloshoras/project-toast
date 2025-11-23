import React, { use } from 'react';
import { useState } from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();


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

  useEscapeKey(() => setToasts([]));

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
