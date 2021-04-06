import React from 'react';

interface ICard {
  id: string,
  origin: string,
  translation: string
}

const Card = ({ card }: any) => {
  return (
    <div>
      <div>{ card.id }</div>
      <div>{ card.origin }</div>
      <div>{ card.translation }</div>
    </div>
  );
};

export {
  Card,
  //ICard
};
