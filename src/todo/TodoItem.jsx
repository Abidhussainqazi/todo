/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png"
import IconImage from '../assets/icon.png';
import "./todo.css"
import React from 'react';


export const TodoItem = ({ title, deleteTodo, ticktodo }) => {
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      <div className="todoicon">
      <img className="Tick" src={IconImage} alt="Icon" onClick={ticktodo} />
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />

      </div>
    </div>
  )
}