import {  List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";
import db from "../firebase";
import "./todo.css";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
function Todo(props) {
  return (
    <List className="todo_list" >
      <ListItem>
          <ListItemAvatar>
             
          </ListItemAvatar>
        <ListItemText secondary="Todo..." primary={props.text.todo} />
      </ListItem>
      <IconButton onClick={event=> db.collection('todos').doc(props.text.id).delete() } aria-label="delete">
  <DeleteIcon />
</IconButton>
    </List>
  );
}

export default Todo;
