import React from 'react';
import { ApiService } from '../../services/api';
import { Card } from '../card';
import { Preloader } from '../shared/preloader';

interface ICard {
  id: string,
  origin: string,
  translation: string
}

const CardsList = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [cards, setCards] = React.useState([]);

  const handleDelete = (cardId: string) => {
    return ApiService.deleteWord(cardId)
      .then(() => setCards(cards.filter(({ id }) => id !== cardId)));
  };

  React.useEffect(() => {
    setIsLoading(true);

    ApiService.getWords()
      .then(result => result.json())
      .then((cards: any) => setCards(cards))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      { isLoading
        ? <Preloader />
        : cards.map((card, index) => <Card card={card} key={index} onDelete={handleDelete} />)
      }
    </div>
  );
};

export { CardsList };
