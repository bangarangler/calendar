import React, {useState, useContext} from 'react';
import {EventContext} from '../../context/allContexts';
//import moment from 'moment';
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
import TimeSelectionStart from '../globalComponents/TimeSelection/TimeSelectionStart.js';
import TimeSelectionEnd from '../globalComponents/TimeSelection/TimeSelectionEnd.js';

import useFormState from '../../hooks/useFormState.js';
import styles from './AddEvent.module.scss';

const AddEvent = ({handleClose}) => {
  const {addEvent, currentDayStart, currentDayEnd} = useContext(EventContext);
  const [allDay, setAllDay] = useState('false');
  const [eventTitle, setEventTitle, resetEvent] = useFormState('');
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  //const reset = () => {
    //resetEvent();
  //};

  const handleChange = e => {
    setAllDay(e.target.value);
    console.log(allDay);
  };

  //let updateEvents;
  const handleAddEvent = async () => {
    let allDayEvent = allDay === 'true' ? true : false;
    let eventBeingAdded = {
      title: eventTitle,
      start: start ? start : currentDayStart,
      end: end ? end : currentDayEnd,
      allDay: allDayEvent,
    };
    addEvent(eventBeingAdded);
    handleClose();
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
          value={eventTitle}
          onChange={setEventTitle}
          required
        />
        <FormHelperText id="my-helper-text" className={styles.helperText}>
          What would you like to call your event?
        </FormHelperText>
      </FormControl>
      <FormControl className={styles.form}>
        <TimeSelectionStart start={start} setStart={setStart} />
        <FormHelperText id="enter start time" className={styles.helperText}>
          What time does the event start?
        </FormHelperText>
      </FormControl>
      <FormControl className={styles.form}>
        <TimeSelectionEnd end={end} setEnd={setEnd} />
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
                checked={allDay === 'false'}
                onChange={handleChange}
                value="false"
              />
            }
            label="No"
            labelPlacement="start"
          />
          <FormControlLabel
            value="start"
            control={
              <Radio
                checked={allDay === 'true'}
                onChange={handleChange}
                value="true"
              />
            }
            label="Yes"
            labelPlacement="start"
          />
        </RadioGroup>
        <Button
          className={styles.addBtn}
          variant="contained"
          color="primary"
          onClick={handleAddEvent}>
          Add Event
          <AddIcon className={styles.icon} />
        </Button>
      </FormControl>
    </div>
  );
};

export default AddEvent;
