import { FunctionComponent, useState, ChangeEvent } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useStyles } from './useStyles';
import { ApiService } from '../../services/api';

const CreateWordForm: FunctionComponent = () => {
  const classes = useStyles();
  const [origin, setOrigin] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleChangeOrigin = (event: ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value);
  };

  const handleChangeTranslation = (event: ChangeEvent<HTMLInputElement>) => {
    setTranslation(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);

    ApiService.createWord({ origin, translation })
      .then(() => {
        setOrigin('');
        setTranslation('');
      })
      .finally(() => {
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
          value={origin}
          variant="outlined"
          onChange={handleChangeOrigin}
        />
      </div>
      <div className={classes.formGroup}>
        <TextField
          className={classes.input}
          label="Translation"
          value={translation}
          variant="outlined"
          onChange={handleChangeTranslation}
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
