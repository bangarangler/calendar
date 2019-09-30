import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

export default function TimeSelection({startOrEnd}) {
  const classes = useStyles()
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label={`${startOrEnd}, time?`}
        type="time"
        defaultValue="09:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
          inputProps={{
            step: 300
          }}
        />
    </form>
  )
}
