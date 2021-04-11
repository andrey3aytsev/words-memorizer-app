import { useState } from 'react';
import { useStyles } from './useStyles';
import { Preloader } from '../shared/preloader';

interface ICard {
  id: string,
  origin: string,
  translation: string
}

const Card = ({ card, onDelete }: any) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    if (isDeleting) return;
    setIsDeleting(true);
    onDelete(card.id).finally(() => setIsDeleting(false));
  };

  return (
    <div className={classes.card}>
      <div>{ card.origin }</div>
      <div>{ card.translation }</div>
      {
        isDeleting
          ? <button className={classes.closeButton} onClick={handleDelete}><Preloader /></button>
          : <button className={classes.closeButton} onClick={handleDelete}>✕</button>
      }
    </div>
  );
};

export {
  Card,
  //ICard
};
