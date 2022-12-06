import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  isEdit: boolean;
}

const Content = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [formValue, setFormValue] = useState('');

  return (
    <Container>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default Content;
