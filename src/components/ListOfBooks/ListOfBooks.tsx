import { FC, useState } from 'react';
import { Book } from '../Book/Book';
import { arrBooks } from '../CreateBook/CreateBook';
import './ListOfBooks';

export const ListOfBooks: FC = () => {
  const [arr, setArr] = useState(arrBooks)
  console.log(arr)
  return (
    <div className="ListOfBooks">
      {arrBooks.map((card) => (
        <Book author={card.author} title={card.title} />
      ))}
    </div>
  );
};
