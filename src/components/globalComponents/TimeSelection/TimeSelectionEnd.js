import React, {useState, useEffect} from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment'
import {DateTimePicker} from '@material-ui/pickers';

const TimeSelectionEnd = ({endTest, setEndTest}) => {
  //const [selectedDateTime, setSelectedDateTime] = useState(new Date(moment()));

  useEffect(() => {
    //console.log(moment(selectedDateTime._d).format())
    console.log(endTest)
  }, [endTest])

  const handleDateChange = (e) => {
    setEndTest(moment(e._d).format())
  }

  return (
    <div>
      <DateTimePicker value={endTest} onChange={e => handleDateChange(e)} />
    </div>
  );
};

export default TimeSelectionEnd;
