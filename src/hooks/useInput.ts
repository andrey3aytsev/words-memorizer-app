import { ChangeEvent, useState } from 'react';

interface IUseInput {
  bind: { value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; };
  value: string;
  setValue: (value: string) => void;
}

const useInput = (initialValue: string): IUseInput => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    bind: { value, onChange },
    value,
    setValue
  };
};

export { useInput };
