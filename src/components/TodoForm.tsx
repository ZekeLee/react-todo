import styled from 'styled-components';
import { ITodo } from './Content';

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  input {
    flex-grow: 1;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
  }
`;

interface IPropsData {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  formValue: string;
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
}

const TodoForm = ({ todos, setTodos, formValue, setFormValue }: IPropsData) => {
  const handleValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setFormValue(newValue);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue) {
      const newTodo: ITodo = {
        id: Date.now() + '',
        title: formValue,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setFormValue('');
    }
  };

  return (
    <Form onSubmit={addTodo}>
      <input
        type="text"
        onChange={handleValueChange}
        placeholder="해야할 일을 입력하세요."
        value={formValue}
        required
      />
      <button type="submit">➕</button>
    </Form>
  );
};

export default TodoForm;
