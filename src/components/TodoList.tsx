import { ITodo } from './Content';
import TodoItem from './TodoItem';

import styled from 'styled-components';

const List = styled.ul`
  li:not(:first-child) {
    border-top: 1px dotted #ccc;
  }
`;

interface IPropsData {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList = ({ todos, setTodos }: IPropsData) => {
  return (
    <List>
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </List>
  );
};

export default TodoList;
