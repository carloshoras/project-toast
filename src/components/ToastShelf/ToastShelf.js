import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {

  const {
    toasts,
    handleDismissToast
  } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismissToast={() => { handleDismissToast(id) }}>
            {message}
          </Toast>
        </li>
      ))}

    </ol>
  );
}

export default ToastShelf;
