import React, { use, useEffect, useState } from 'react';

import Button from '../Button';
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = useState('')
  const [variantSelected, setVariantSelected] = useState(VARIANT_OPTIONS[0])

  const {
    toasts,
    createToast,
  } = React.useContext(ToastContext);

  function handleCreateToast(event) {
    event.preventDefault()
    createToast(message, variantSelected)
    setMessage('')
    setVariantSelected(VARIANT_OPTIONS[0])
  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toasts.length > 0 && (
        <ToastShelf />
      )}
      <form onSubmit={handleCreateToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={event => {
                setMessage(event.target.value)
              }}
            />
          </div>
        </div>



        <div className={styles.row}>
          <div className={styles.label}>Variant</div>

          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => {
              const id = `variant-${option}`
              return (

                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    checked={option === variantSelected}
                    value={option}
                    onChange={event => {
                      setVariantSelected(event.target.value)
                    }}
                  />
                  {option}
                </label>
              )
            })}
          </div>

        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default ToastPlayground;
