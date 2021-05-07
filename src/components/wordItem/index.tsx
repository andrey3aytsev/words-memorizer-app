import { FunctionComponent, useState } from 'react';
import { useStyles } from './useStyles';
import { Card, Typography, IconButton, CircularProgress } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

interface IWord {
  id: string;
  origin: string;
  translation: string;
}

interface IWordProps {
  card: IWord;
  onDelete: (id: string) => Promise<void>;
}

const WordItem: FunctionComponent<IWordProps> = ({ card, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    if (isDeleting) return;
    setIsDeleting(true);
    onDelete(card.id).finally(() => setIsDeleting(false));
  };

  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.content}>
        <Typography className={classes.title} variant="h5" component="p">{ card.origin }</Typography>
        <Typography variant="body2">{ card.translation }</Typography>
      </div>
      <div className={classes.actions}>
        { !isDeleting &&
          <IconButton onClick={handleDelete}>
            <Delete/>
          </IconButton>
        }
        { isDeleting && <CircularProgress/> }
      </div>
    </Card>
  );
};

export { WordItem };
