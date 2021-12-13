import { FC, useCallback, useState } from 'react';
import './CreateBook';

const EMPTY_FORM = {
  author: '',
  title: '',
}

export type ArrBooks = {
  author: string,
  title: string,
}

export const arrBooks: ArrBooks[] = []
console.log(arrBooks)

export const CreateBook: FC = () => {
  const [form, setForm] = useState(EMPTY_FORM)  

  const saveBook = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(form)
    arrBooks.push(form)
  };

  const handleChange = useCallback(
    (e) => {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
  }, [setForm]);
  // console.log(form)о

  return (
    <form className="CreateBook" action="" onSubmit={saveBook}>
      <div className="CreateBook__field">
        <input name="author" placeholder="Автор" onChange={handleChange} value={form.author} />
      </div>
      <div className="CreateBook__field">
        <input name="title" placeholder="Название книги" onChange={handleChange} value={form.title} />
      </div>
      <button type="submit" className="CreateBook__button">
        Создать
      </button>
    </form>
  );
};
