import React, {useEffect, useContext} from 'react';
//import MomentUtils from '@date-io/moment';
import moment from 'moment'
import {DateTimePicker} from '@material-ui/pickers';
import { EventContext } from '../../../context/allContexts'

const TimeSelectionEnd = ({end, setEnd}) => {
  const { currentDayEnd, setCurrentDayEnd } = useContext(EventContext);

  useEffect(() => {
    //console.log(moment(selectedDateTime._d).format())
    console.log(end)
  }, [end])

  const handleDateChange = (e) => {
    setCurrentDayEnd(moment(e._d).format())
    setEnd(moment(e._d).format())
  }

  return (
    <div>
      <DateTimePicker value={end = currentDayEnd} onChange={e => handleDateChange(e)} required={true} />
    </div>
  );
};

export default TimeSelectionEnd;
