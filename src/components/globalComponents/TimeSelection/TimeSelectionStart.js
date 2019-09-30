//import React from 'react'
//import { makeStyles } from '@material-ui/core/styles'
//import TextField from '@material-ui/core/TextField'

//const useStyles = makeStyles(theme => ({
//container: {
//display: 'flex',
//flexWrap: 'wrap'
//},
//textField: {
//marginLeft: theme.spacing(1),
//marginRight: theme.spacing(1),
//width: 200
//}
//}))

//export default function TimeSelection({startOrEnd}) {
//const classes = useStyles()
//return (
//<form className={classes.container} noValidate>
//<TextField
//id="time"
//label={`${startOrEnd}, time?`}
//type="time"
//defaultValue="09:00"
//className={classes.textField}
//InputLabelProps={{
//shrink: true
//}}
//inputProps={{
//step: 300
//}}
///>
//</form>
//)
//}

import React, {useState, useEffect, useContext} from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment'
import {DateTimePicker} from '@material-ui/pickers';
import { EventContext } from '../../../context/allContexts/'

const TimeSelectionStart = ({startTest, setStartTest}) => {
  const { currentDayStart, currentDayEnd } = useContext(EventContext)
  //const [selectedDateTime, setSelectedDateTime] = useState(new Date(moment()));

  useEffect(() => {
    //console.log(moment(selectedDateTime._d).format())
    console.log(startTest)
    console.log(currentDayStart)
  }, [startTest, currentDayStart])

  const handleDateChange = (e) => {
    // ex 2019-09-24T12:50:00-04:00
    setStartTest(moment(e._d).format())
  }

  return (
    <div>
      <DateTimePicker value={startTest = currentDayStart} onChange={(e) => handleDateChange(e)} />
    </div>
  );
};

export default TimeSelectionStart;
