import React, {useState, useEffect, useContext} from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment'
import {DateTimePicker} from '@material-ui/pickers';
import { EventContext } from '../../../context/allContexts'

const TimeSelectionEnd = ({endTest, setEndTest}) => {
  const { currentDayEnd, setCurrentDayEnd } = useContext(EventContext);
  //const [selectedDateTime, setSelectedDateTime] = useState(new Date(moment()));

  useEffect(() => {
    //console.log(moment(selectedDateTime._d).format())
    console.log(endTest)
  }, [endTest])

  const handleDateChange = (e) => {
    setCurrentDayEnd(moment(e._d).format())
    setEndTest(moment(e._d).format())
  }

  return (
    <div>
      <DateTimePicker value={endTest = currentDayEnd} onChange={e => handleDateChange(e)} required={true} />
    </div>
  );
};

export default TimeSelectionEnd;
