import { cn } from '@bem-react/classname';
import { FC, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { StatusesDashboardFormProps } from '../../Books.types';
import { EMPTY_BOOK_FORM } from '../CreateBook.const';

export const CreateBookForm: FC<StatusesDashboardFormProps> = ({ onSubmit }) => {
  const cnForm = cn('CreateBookForm');

  const [form, setForm] = useState(EMPTY_BOOK_FORM);

  const inputChangeHandle = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const formSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();

      onSubmit({
        ...form,
        id: v4(),
      });
    },
    [form, onSubmit]
  );

  return (
    <form className={cnForm()} action="" onSubmit={formSubmitHandle}>
      <input
        className={cnForm('BookInput', ['Author'])}
        name="author"
        placeholder="Автор"
        onChange={inputChangeHandle}
        value={form.author}
      />
      <input
        className={cnForm('BookInput', ['Title'])}
        name="title"
        placeholder="Название книги"
        onChange={inputChangeHandle}
        value={form.title}
      />
      <button className={cnForm('AddButton')} type="submit">
        Добавить книгу
      </button>
    </form>
  );
};
