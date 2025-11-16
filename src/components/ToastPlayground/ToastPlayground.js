import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [textMessage, setTextMessage] = useState('')
  const [variantSelected, setVariantSelected] = useState(VARIANT_OPTIONS[0])

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
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
              value={textMessage}
              onChange={event => {
                setTextMessage(event.target.value)
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

                <label htmlFor={id}>
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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
