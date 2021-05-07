import { FunctionComponent, useState, useEffect } from 'react';
import { ApiService } from '../../services/api';
import { Card } from '../card';
import { Grid, LinearProgress } from '@material-ui/core';

const CardsList: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cards, setCards] = useState([]);

  const handleDelete = (cardId: string) => {
    return ApiService.deleteWord(cardId)
      .then(() => setCards(cards.filter(({ id }) => id !== cardId)));
  };

  useEffect(() => {
    ApiService.getWords()
      .then(result => result.json())
      .then((cards) => setCards(cards))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      { isLoading && <LinearProgress/> }
      { !isLoading && !!cards.length &&
        <Grid container spacing={2}>
          { cards.map((card, index) =>
            <Grid item xs={3}>
              <Card card={card} key={index} onDelete={handleDelete}/>
            </Grid>
          )}
        </Grid>
      }
      { !isLoading && !cards.length && <>No words</> }
    </div>
  );
};

export { CardsList };
