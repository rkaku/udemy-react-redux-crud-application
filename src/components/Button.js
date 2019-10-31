import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ContainedButtons({
  variant,
  color,
  disabled,
  component,
  to,
  buttonLabel
}) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant={ variant }
        color={ color }
        disabled={ disabled }
        component={ component }
        to={ to }
        className={ classes.button }
      >
        { buttonLabel }
      </Button>
    </div>
  );
}