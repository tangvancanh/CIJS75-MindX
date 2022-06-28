import './App.css';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState("");
  const [array, setArray] = useState([])

  const Play = (e) => {
    e.preventDefault();
    setArray([...array, todoList]);
    setTodoList("");
  }
  

  return (
    <div>
      <p>Todo</p>

      <form onSubmit={Play}>

        <input type="text" value={todoList} onChange={(e) => setTodoList(e.target.value)} />
        <button>Add</button>

      </form>

      <div>
        {array.join(",")}
      </div>
    </div>
  );
}

export default App;
