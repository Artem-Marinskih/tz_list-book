import { FC } from 'react'
import './Book'

export type BookProps = {
  author: string,
  title: string,
}

export const Book: FC<BookProps> = ({ author, title}) => {
 return (
   <div className='Book'>
     <h2 className='Book__author'>{author}</h2>
     <p className='Book__title'>{title}</p>
   </div>
 )
}