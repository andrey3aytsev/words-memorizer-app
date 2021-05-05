import { FunctionComponent, useState } from 'react';
import { useStyles } from './useStyles';
import { CircularProgress, Card as MaterialCard } from '@material-ui/core';

interface ICard {
  id: string;
  origin: string;
  translation: string;
}

interface ICardProps {
  card: ICard;
  onDelete: (id: string) => Promise<void>;
}

const Card: FunctionComponent<ICardProps> = ({ card, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    if (isDeleting) return;
    setIsDeleting(true);
    onDelete(card.id).finally(() => setIsDeleting(false));
  };

  return (
    <MaterialCard variant="outlined" className={classes.root}>
      <div>{ card.origin }</div>
      <div>{ card.translation }</div>
      {
        isDeleting
          ? <button onClick={handleDelete}><CircularProgress /></button>
          : <button onClick={handleDelete}>✕</button>
      }
    </MaterialCard>
  );
};

export { Card };
