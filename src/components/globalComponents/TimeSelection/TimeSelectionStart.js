import React, {useEffect, useContext} from 'react';
//import MomentUtils from '@date-io/moment';
import moment from 'moment'
import {DateTimePicker} from '@material-ui/pickers';
import { EventContext } from '../../../context/allContexts/'

const TimeSelectionStart = ({start, setStart}) => {
  const { currentDayStart, setCurrentDayStart} = useContext(EventContext)

  useEffect(() => {
    //console.log(moment(selectedDateTime._d).format())
    console.log(start)
    console.log(currentDayStart)
  }, [start, currentDayStart])

  const handleDateChange = (e) => {
    console.log(e._d)
    // ex 2019-09-24T12:50:00-04:00
    setCurrentDayStart(moment(e._d).format())
    setStart(moment(e._d).format())
  }

  return (
    <div>
      <DateTimePicker value={start = currentDayStart} onChange={(e) => handleDateChange(e)} required={true} />
    </div>
  );
};

export default TimeSelectionStart;
