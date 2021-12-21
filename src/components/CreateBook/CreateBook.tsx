import { FC, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { cn } from '@bem-react/classname';
import { Book } from '../Book/Book';

import './CreateBook.scss';
import { EMPTY_BOOK_FORM, INITIAL_BOOK } from './CreateBook.const';

const cnCreateBook = cn('CreateBook');

export const CreateBook: FC = () => {
  const [books, setBook] = useState(INITIAL_BOOK);

  const [form, setForm] = useState(EMPTY_BOOK_FORM);

  const handleChange = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setBook((prev) => [
        ...prev,
        {
          ...form,
          id: v4(),
        },
      ]);
    },
    [form]
  );

  return (
    <div className={cnCreateBook()}>
      {books.map((book) => (
        <Book key={book.id} author={book.author} title={book.title} id={book.id} />
      ))}
      <form className={cnCreateBook('Form')} action="" onSubmit={handleFormSubmit}>
        <input
          className={cnCreateBook('BookInput', ['Author'])}
          name="author"
          placeholder="Автор"
          onChange={handleChange}
          value={form.author}
        />
        <input
          className={cnCreateBook('BookInput', ['Title'])}
          name="title"
          placeholder="Название книги"
          onChange={handleChange}
          value={form.title}
        />
        <button className={cnCreateBook('AddButton')} type="submit">
          Создать
        </button>
      </form>
    </div>
  );
};
