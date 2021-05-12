import { FunctionComponent, useState, ChangeEvent } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useStyles } from './useStyles';
import { ApiService } from '../../services/api';
import { useInput } from '../../hooks/useInput';

const CreateWordForm: FunctionComponent = () => {
  const classes = useStyles();
  const origin = useInput('');
  const translation = useInput('');
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);

    ApiService.createWord({
      origin: origin.value,
      translation: translation.value
    }).then(() => {
      origin.setValue('');
      translation.setValue('');
    }).finally(() => {
      setIsSaving(false);
    });
  };

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className={classes.formGroup}>
        <TextField
          className={classes.input}
          label="Origin"
          variant="outlined"
          { ...origin.bind }
        />
      </div>
      <div className={classes.formGroup}>
        <TextField
          className={classes.input}
          label="Translation"
          variant="outlined"
          { ...translation.bind }
        />
      </div>
      <div className={`${classes.formGroup} ${classes.actions}`}>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={isSaving}
        >Create</Button>
        { isSaving && <CircularProgress/> }
      </div>
    </form>
  )
};

export { CreateWordForm };
