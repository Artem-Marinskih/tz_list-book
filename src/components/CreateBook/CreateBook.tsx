import { FC, useState } from 'react';
import { cn } from '@bem-react/classname';

import { INITIAL_BOOK } from './CreateBook.const';
import { CreateBookForm } from './Form/CreateBookForm';
import { BookType } from '../Books.types';
import { Book } from '../Book/Book';

import './CreateBook.scss';

const cnCreateBook = cn('CreateBook');

export const CreateBook: FC = () => {
  const [books, setBook] = useState(INITIAL_BOOK);

  const deleteStatusHandler = (id: string) => {
    setBook((prev) => prev.filter((book) => book.id !== id));
  };

  const formSubmitHandle = (data: BookType) => {
    setBook((prev) => [...prev, data]);
  };

  return (
    <div className={cnCreateBook()}>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={deleteStatusHandler} />
      ))}
      <CreateBookForm onSubmit={formSubmitHandle} />
    </div>
  );
};
