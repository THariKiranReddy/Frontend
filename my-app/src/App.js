import './App.css';
import { data } from './data';
import { List } from './List';

function App() {
   console.log(`${data.length} birthdays today`);
  return (
    <div className="App">
     <List person={data}/>
    </div>
  );
}

export default App;
