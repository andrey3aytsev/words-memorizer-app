import { FunctionComponent, useState, useEffect } from 'react';
import { ApiService } from '../../services/api';
import { Grid, LinearProgress } from '@material-ui/core';
import { WordItem } from '../wordItem';

const WordsList: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cards, setCards] = useState([]);

  const handleDelete = (cardId: string) => {
    return ApiService.deleteWord(cardId)
      .then(() => setCards(cards.filter(({ id }) => id !== cardId)));
  };

  useEffect(() => {
    ApiService.getWords()
      .then(result => result.json())
      .then((result) => setCards(result))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      { isLoading && <LinearProgress/> }
      { !isLoading && !!cards.length &&
        <Grid container spacing={2}>
          { cards.map((card, index) =>
            <Grid key={index} item xs={3}>
              <WordItem card={card} onDelete={handleDelete}/>
            </Grid>
          )}
        </Grid>
      }
      { !isLoading && !cards.length && <>No words</> }
    </div>
  );
};

export { WordsList };
