import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoForm = styled.form`
  display: flex;
  gap: 0.5rem;
  input {
    flex-grow: 1;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
  }
`;

const TodoList = styled.ul`
  li:not(:first-child) {
    border-top: 1px dotted #ccc;
  }
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-grow: 1;

    input:checked + label {
      text-decoration: line-through;
    }

    label {
      flex-grow: 1;
      padding: 1rem 0;
      cursor: pointer;
    }
  }
`;

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

const Content = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [formValue, setFormValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setFormValue(newValue);
  };

  const toggleChange = (id: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(newTodo);
  };

  console.log(todos);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: ITodo = {
      id: Date.now() + '',
      title: formValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setFormValue('');
  };

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((data) => id !== data.id);

    setTodos(newTodos);
  };

  return (
    <Container>
      <TodoForm onSubmit={addTodo}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="해야할 일을 입력하세요."
          value={formValue}
        />
        <button type="submit">➕</button>
      </TodoForm>
      <TodoList>
        {todos.map((data) => (
          <TodoItem key={data.id}>
            <div>
              <input
                type="checkbox"
                id={data.id}
                onChange={() => toggleChange(data.id)}
                checked={data.completed ? true : false}
              />
              <label htmlFor={data.id}>{data.title}</label>
            </div>
            <button type="button" onClick={() => removeTodo(data.id)}>
              ❎
            </button>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default Content;
