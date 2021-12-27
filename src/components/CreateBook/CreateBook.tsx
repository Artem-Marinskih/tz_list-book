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

  const getLocalStorage = (data: BookType) => {
    INITIAL_BOOK[0].author = localStorage.getItem(`author ${data.id}`) || '';
    INITIAL_BOOK[0].title = localStorage.getItem(`title ${data.id}`) || '';
  }

  const setLocalStorage = (data: BookType) => {
    localStorage.setItem(`author ${data.id}`, data.author);
    localStorage.setItem(`title ${data.id}`, data.title);
  };

  const deleteStatusHandler = (id: string) => {
    setBook((prev) => prev.filter((book) => book.id !== id));
  };

  const formSubmitHandle = (data: BookType) => {
    setBook((prev) => [...prev, data]);
    setLocalStorage(data);
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
