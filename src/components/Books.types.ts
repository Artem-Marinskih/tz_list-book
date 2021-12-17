export type BookDataType = {
  author: string;
  title: string;
};

export type BookType = BookDataType & {
  id: string,
}