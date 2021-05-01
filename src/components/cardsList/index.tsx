import { FunctionComponent, useState, useEffect } from 'react';
import { ApiService } from '../../services/api';
import { Card } from '../card';
import { Preloader } from '../shared/preloader';

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
      { isLoading
        ? <Preloader />
        : cards.length
          ? cards.map((card, index) => <Card card={card} key={index} onDelete={handleDelete}/>)
          : <>empty list</>
      }
    </div>
  );
};

export { CardsList };
