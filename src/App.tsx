import './App.css';
import { CreateBook } from './components/CreateBook/CreateBook';
import { ListOfBooks } from './components/ListOfBooks/ListOfBooks';



function App() {
  return (
    <div className="App">
     <ListOfBooks/>
     <CreateBook />
    </div>
  );
}

export default App;
