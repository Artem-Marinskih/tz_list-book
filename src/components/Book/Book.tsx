import { FC } from 'react'
import { cn } from '@bem-react/classname';
import { BookType } from '../Books.types'
import './Book.scss'

const cnBook = cn('Book')

export const Book: FC<BookType> = ({ id, author, title}) => {
 return (
   <div className={cnBook()}>
     <h2 className={cnBook('Author')}>{author}</h2>
     <p className={cnBook('Title')}>{title}</p>
   </div>
 )
}