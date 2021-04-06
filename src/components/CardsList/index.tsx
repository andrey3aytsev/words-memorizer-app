import React from 'react';
//import { ICard } from '../Card';
import { ApiService } from '../../services/api';
import { Card } from '../Card';

interface ICard {
  id: string,
  origin: string,
  translation: string
}

const CardsList = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    ApiService.getWords()
      //.then(result => result.json())
      .then((cards: any) => setCards(cards))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      { isLoading
        ? <div>Is Loading...</div>
        : cards.map((card, index) => <Card card={card} key={index} />)
      }
    </div>
  );
};

export { CardsList };
