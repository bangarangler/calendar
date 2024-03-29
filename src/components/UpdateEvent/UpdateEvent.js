import React, {useState, useEffect, useContext} from 'react';
import {EventContext, SpinnerContext} from '../../context/allContexts';
import TimeSelectionStart from '../globalComponents/TimeSelection/TimeSelectionStart.js'
import TimeSelectionEnd from '../globalComponents/TimeSelection/TimeSelectionEnd.js'
//import moment from 'moment';
import {
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from '@material-ui/core';

import UpdateIcon from '@material-ui/icons/Update';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import useFormState from '../../hooks/useFormState.js';
import styles from './UpdateEvent.module.scss';

const UpdateEvent = ({ handleClose }) => {
  const {
    events,
    eventId,
    eventToModify,
    modifiedEventLoaded,
    updateEvent,
    deleteEvent
  } = useContext(EventContext);
  const {Loader} = useContext(SpinnerContext);
  const [allDay, setAllDay] = useState('false');
  const [eventTitle, setEventTitle, resetEvent] = useFormState('');
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  //const reset = () => {
    //resetEvent();
    ////resetStart();
    ////resetEnd();
  //};

  const handleChange = e => {
    setAllDay(e.target.value);
  };

  const handleUpdateEvent = async () => {
    console.log('handle update event fired!');
    //console.log(eventId);
    const oldEventObj = events.filter(event => eventId === event._id);
    //console.log('oldEvent: ', oldEventObj);
    let allDayEvent = allDay === 'true' ? true : false;
    let eventBeingUpdated = {
      title: eventTitle !== '' ? eventTitle : oldEventObj[0].title,
      start: start !== oldEventObj[0].start ? start : oldEventObj[0].start,
      end: end !== oldEventObj[0].end ? end : oldEventObj[0].end,
      allDay: allDayEvent,
    };
    updateEvent(eventBeingUpdated);
    handleClose()
  };

  const handleDeleteEvent = async () => {
    //console.log(eventId)
    deleteEvent(eventId)
    handleClose()
  }

  useEffect(() => {
    modifiedEventLoaded();
  }, []);

  return (
    <>
      {!eventToModify ? (
        Loader()
      ) : (
        <div className={styles.formContainer}>
          <FormControl className={styles.form}>
            <Input
              id="title"
              aria-describedby="my-helper-ext"
              className={styles.input}
              value={eventTitle}
              onChange={setEventTitle}
              placeholder={`${eventToModify[0].title}`}
              required
            />
            <FormHelperText id="my-helper-text" className={styles.helperText}>
              Are you updating the title?
            </FormHelperText>
          </FormControl>
          <FormControl className={styles.form}>
        <TimeSelectionStart start={start} setStart={setStart} />
            <FormHelperText id="enter start time" className={styles.helperText}>
              Update event start time?
            </FormHelperText>
          </FormControl>
          <FormControl className={styles.form}>
        <TimeSelectionEnd end={end} setEnd={setEnd} />
            <FormHelperText id="enter end time" className={styles.helperText}>
              Update event end time?
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
            <div className={styles.buttonContainer}>
            <Button
              className={styles.addBtn}
              variant="contained"
              color="primary"
              onClick={handleUpdateEvent}>
              Update Event
              <UpdateIcon className={styles.icon} />
            </Button>
            <Button
              className={styles.removeButton}
              variant="contained"
              color="secondary"
              onClick={handleDeleteEvent}>
              Delete Event
              <HighlightOffIcon className={styles.icon} />
            </Button>
          </div>
          </FormControl>
        </div>
      )}
    </>
  );
};

export default UpdateEvent;
