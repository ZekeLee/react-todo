import React, { useState } from 'react';
import { ITodo } from './Content';

import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-grow: 1;
    padding: 0.5rem 0;

    input:checked + label {
      text-decoration: line-through;
    }

    label {
      padding: 0.5rem 0;
      flex-grow: 1;
      cursor: pointer;
    }

    textarea {
      flex-grow: 1;
      resize: none;
    }
  }
`;

interface IPropsData {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  isEdit: boolean;
  title: string;
}

const TodoItem = ({ todo, todos, setTodos, isEdit, title }: IPropsData) => {
  const [value, setValue] = useState(title);

  const handleToggleChange = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(newTodos);
    localStorage.setItem('todoList', JSON.stringify(newTodos));
  };

  const handleEdit = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.isEdit) {
          if (todo.title === value) {
            todo.title = value;
          } else if (window.confirm('할 일을 수정하시겠습니까?')) {
            todo.title = value;
          }
        }
        todo.isEdit = !todo.isEdit;
      }

      return todo;
    });

    setTodos(newTodos);
    localStorage.setItem('todoList', JSON.stringify(newTodos));
  };

  const changeValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const removeTodo = (id: string) => {
    if (window.confirm('할 일을 삭제하시겠습니까?')) {
      const newTodos = todos.filter((data) => id !== data.id);

      setTodos(newTodos);
      localStorage.setItem('todoList', JSON.stringify(newTodos));
    }
  };

  return (
    <Item>
      <div>
        {isEdit ? (
          <textarea autoFocus onChange={changeValue} value={value} />
        ) : (
          <>
            <input
              type="checkbox"
              id={todo.id}
              onChange={() => handleToggleChange(todo.id)}
              checked={todo.completed ? true : false}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </>
        )}
      </div>

      <button type="button" onClick={() => handleEdit(todo.id)}>
        {isEdit ? '✅' : '✏️'}
      </button>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        ❎
      </button>
    </Item>
  );
};

export default React.memo(TodoItem);
