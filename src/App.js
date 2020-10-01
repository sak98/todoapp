import { FormControl, InputLabel, Button, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase";
import Todo from "./Components/Todo";
import db from "./firebase"
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when app loads .. need to listen to db and fetch all the todos as they add and removed 

  useEffect(()=>{
    //code fires when the app loads 
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data().todo));
      setTodos(snapshot.docs.map(doc=>({id : doc.id, todo : doc.data().todo})))
    })    

  },[]);

  const addTodo = (event) => {
    //this func  will fire when when button is clicked
    event.preventDefault();
    db.collection("todos").add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
     
    setInput("");// clears input ince submit button is clicked 
  };
  return (
    <div className="App">
      <h1> Todo List todo </h1>
      <form onSubmit={addTodo}>
        <FormControl>
          <InputLabel> Write a todo List </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary">
          Add todo List
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
