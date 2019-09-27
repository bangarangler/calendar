import React, {useState, useEffect, useContext} from 'react';
import { EventContext, SpinnerContext } from '../../context/allContexts'
import moment from 'moment'
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

import useFormState from '../../hooks/useFormState.js'
import styles from './UpdateEvent.module.scss';

const UpdateEvent = props => {
  const { events, eventId, eventToModify, setEventToModify, modifiedEventLoaded } = useContext(EventContext)
  const { Loader } = useContext(SpinnerContext)
  const [allDay, setAllDay] = useState('false');
  const [eventTitle, setEventTitle, resetEvent] = useFormState("")
  const [start, setStart, resetStart] = useFormState("")
  const [end, setEnd, resetEnd] = useFormState("")

  const reset = () => {
    resetEvent()
    resetStart()
    resetEnd()
  }

  const handleChange = e => {
    setAllDay(e.target.value);
    console.log(allDay);
  };

  //let updateEvents;
  const handleUpdateEvent = async () => {
    console.log('handle update event fired!')
    //let allDayEvent = allDay === "true" ? true : false
    //let eventBeingAdded = {
      //title: eventTitle,
      //start: start,
      //end: end,
      //allDay: allDayEvent
    }
    //updateEvent(eventBeingAdded)
  //}
  useEffect(() => {
    modifiedEventLoaded()
  }, [])

  return (
    <>
      {!eventToModify ? Loader() :
    <div className={styles.formContainer}>
      <FormControl className={styles.form}>
        <Input
          id="title"
          aria-describedby="my-helper-ext"
          className={styles.input}
          value={eventTitle}
          onChange={setEventTitle}
          placeholder={`${eventToModify[0].title }`}
          required
        />
        <FormHelperText id="my-helper-text" className={styles.helperText}>
          What would you like to call your event?
        </FormHelperText>
      </FormControl>
      <FormControl className={styles.form}>
        <Input
          id="start"
          aria-describedby="enter start time"
          className={styles.input}
          value={start}
          onChange={setStart}
          placeholder={`${moment(eventToModify[0].start).format('MMM Do YY')}`}
          required
        />
        <FormHelperText id="enter start time" className={styles.helperText}>
          What time does the event start? 'YYYY-MM-DD'
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
          value={end}
          onChange={setEnd}
          required
        />
        <FormHelperText id="enter end time" className={styles.helperText}>
          What time does the event end? 'YYYY-MM-DD'
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
          color="secondary"
          onClick={handleUpdateEvent}
        >
          Update Event
          <AddIcon className={styles.icon} />
        </Button>
      </FormControl>
    </div> }
  </>
  );
};

export default UpdateEvent;
