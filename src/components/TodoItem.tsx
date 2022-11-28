import { ITodo } from './Content';

import styled from 'styled-components';

const Item = styled.li`
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

interface IPropsData {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: IPropsData) => {
  const handleToggleChange = (id: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(newTodo);
  };

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((data) => id !== data.id);

    setTodos(newTodos);
  };

  return (
    <Item>
      <div>
        <input
          type="checkbox"
          id={todo.id}
          onChange={() => handleToggleChange(todo.id)}
          checked={todo.completed ? true : false}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        ❎
      </button>
    </Item>
  );
};

export default TodoItem;
