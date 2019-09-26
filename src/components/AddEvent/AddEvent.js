import React, {useState, useEffect} from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import styles from './AddEvent.module.scss';

const AddEvent = props => {
  const [allDay, setAllDay] = useState('true');

  const handleChange = e => {
    setAllDay(e.target.value);
    console.log(allDay);
  };

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
      <FormControl component="fieldset" className={styles.form}>
        <FormLabel component="legend" className={styles.legend}>
          All day event?
        </FormLabel>
        <RadioGroup aria-label="position" name="start" row>
          <FormControlLabel
            control={
              <Radio
                checked={allDay === 'true'}
                onChange={handleChange}
                value="true"
              />
            }
            label="No"
            labelPlacement="start"
          />
          <FormControlLabel
            value="start"
            control={
              <Radio
                checked={allDay === 'false'}
                onChange={handleChange}
                value="false"
              />
            }
            label="Yes"
            labelPlacement="start"
          />
        </RadioGroup>
        <Button className={styles.addBtn} variant="contained" color="secondary">
          Add Event
          <AddIcon className={styles.icon}/>
        </Button>
      </FormControl>
    </div>
  );
};

export default AddEvent;