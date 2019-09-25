import React, {useState} from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Radio,
} from '@material-ui/core';
import styles from './AddEvent.module.scss';

const AddEvent = props => {
  const [allDay, setAllDay] = useState(false);
  const [test, setTest] = useState(false)
  const changeAllDay = () => {
    setAllDay(!allDay)
    console.log(allDay)
  };
  const testing = () => {
    setTest(!test)
    console.log(test)
  }
  return (
    <div className={styles.formContainer}>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="title" className={styles.label}>
          Event Title
        </InputLabel>
        <Input
          id="title"
          aria-describedby="my-helper-ext"
          className={styles.input}
        />
        <FormHelperText id="my-helper-text" className={styles.helperText}>
          What would you like to call your event?
        </FormHelperText>
      </FormControl>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="start" className={styles.label}>
          Start Time
        </InputLabel>
        <Input
          id="start"
          aria-describedby="enter start time"
          className={styles.input}
        />
        <FormHelperText id="enter start time" className={styles.helperText}>
          What time does the event start?
        </FormHelperText>
      </FormControl>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="end" className={styles.label}>
          End Time
        </InputLabel>
        <Input
          id="end"
          aria-describedby="enter end time"
          className={styles.input}
        />
        <FormHelperText id="enter end time" className={styles.helperText}>
          What time does the event end?
        </FormHelperText>
      </FormControl>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="allDay" className={styles.label}>
          All Day Event?
        </InputLabel>
        <Radio
          onChange={changeAllDay}
          value="true"
          color="default"
          name="allDay"
          inputProps={{'aria-label': 'true'}}
        />
      </FormControl>
    </div>
  );
};

export default AddEvent;
