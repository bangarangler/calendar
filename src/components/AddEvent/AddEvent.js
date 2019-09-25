import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import styles from './AddEvent.module.scss';

const AddEvent = props => {
  return (
    <div className={styles.formContainer}>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="title" className={styles.label}>Event Title</InputLabel>
        <Input id="title" aria-describedby="my-helper-ext" className={styles.input} />
        <FormHelperText id="my-helper-text" className={styles.helperText}>
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default AddEvent;
