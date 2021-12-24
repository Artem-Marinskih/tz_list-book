import { FC, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { BookProps } from '../Books.types';

import './Book.scss';

const cnBook = cn('Book');

export const Book: FC<BookProps> = ({ book, onDelete }) => {
  const deleteHandler = useCallback(() => {
    onDelete?.(book.id);
  }, [onDelete, book.id]);

  return (
    <div key={book.id} className={cnBook()}>
      <h2 className={cnBook('Author')}>{book.author}</h2>
      <p className={cnBook('Title')}>{book.title}</p>
      {onDelete && <FontAwesomeIcon icon={faTrashAlt} onClick={deleteHandler} />}
    </div>
  );
};
