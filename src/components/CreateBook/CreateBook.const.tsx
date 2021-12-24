import { BookDataType, BookType } from '../Books.types';

export const INITIAL_BOOK: BookType[] = [
  {
    id: '1',
    author: 'Автор',
    title: 'Текст',
  },
];

export const EMPTY_BOOK_FORM: BookDataType = {
  author: '',
  title: '',
};
