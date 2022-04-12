import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import {Todo} from "./models/model";
import TodoList from "./components/TodoList";

//for functional component type
const App: React.FC = () => {
  const [todo, setToDo] = useState<string>("");
  //array of a type interface
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(),todo, isDone: false }]);
      setToDo("");
    };
  }

  console.log(todos)

  return (
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
  );
};

export default App;
