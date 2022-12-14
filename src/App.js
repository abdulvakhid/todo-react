
import { useState } from 'react';
import './assets/styles/index.css';

function App() {

const [value, setValue] = useState("");
const [todos, setTodos] = useState([]);

const getValue = (evt) => {
  if(evt.target.value ===  ""){
    alert("Please enter task");
  }else{
    setValue(evt.target.value);
  }
}


const addTodo = (evt) => {
evt.preventDefault();
console.log(value)

const newTodo = {
id: Math.random(),
text: value,
isComplete: false,
};

setTodos(prev => {
  return [...prev, newTodo]
});
setValue("");
}


const deleteTodo = (id) => {
  console.log(id);
  const newTodo = todos.filter(item => item.id !== id);
  setTodos(newTodo);
console.log(setTodos);
}


function handlEditTodo(id){
  const newArr = [...todos]
  const item = newArr.find(item => item.id === id)
  const text = prompt("Change todo", item.text)
  item.text = text

  setTodos(newArr);
}

function checkTodo(id){
const checkedArr = [ ...todos]
  let findItem = checkedArr.find(item => item.id === id);
  findItem.isComplete = !findItem.isComplete;

  setTodos(checkedArr);
}

return (
    <div className="app">
     <div className="container">
        <h1 className='text-center mb-4  fw-bold text-white'>Your todos</h1>

        <form className='d-flex w-50 mx-auto mb-5' onSubmit={addTodo}>
          <input className='form-control me-3' type="text" value={value} aria-label='enter your todo' placeholder='enter your todo'  
          onChange={getValue}/>
          <button className='btn btn-outline-info' type='submit'>ADD</button>
        </form>

       <ul className='list-unstyled d-flex flex-column align-items-center justify-content-center'>
          {
          todos.map(todo => (
          <li className='d-flex mb-3 justify-content-between align-items-center item bg-light' key={todo.id}>
              
              <div className='d-flex align-items-center'>
              <input className='me-3' type="checkbox" onClick={() => checkTodo(todo.id)}/>
              <p className='m-0 me-5 texttodo' style={{textDecoration: todo.isComplete ? "line-through" : "none"}}>{todo.text}</p>
              </div>
             <div>
             <button className='btn btn-success me-3' onClick={() => handlEditTodo(todo.id)}>edit</button>
              <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>delete</button>
             </div>
          </li>)  )
          }
        </ul>
     </div>
    </div>
  );

}

export default App;
