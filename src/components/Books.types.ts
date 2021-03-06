export type BookDataType = {
  author: string;
  title: string;
};

export type BookType = BookDataType & {
  id: string;
};

export type StatusesDashboardFormProps = {
  onSubmit: (book: BookType) => void;
};

export type BookProps = {
  book: BookType;
  onDelete?: (id: string) => void;
}