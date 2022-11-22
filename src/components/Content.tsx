import styled from 'styled-components';

const TodoList = styled.ul`
  li:not(:first-child) {
    border-top: 1px dotted #ccc;
  }
`;

const TodoItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 0;

  > div {
    flex-grow: 1;
  }
`;

const Content = () => {
  const toDos = [
    { id: '1', title: '공부하기', completed: true },
    { id: '2', title: '청소하기', completed: false },
  ];

  return (
    <main>
      <TodoList>
        {toDos.map((data) => (
          <TodoItem key={data.id}>
            <div>
              <input type="checkbox" id={data.id} />
              <label htmlFor={data.id}>{data.title}</label>
            </div>
            <button type="button">❎</button>
          </TodoItem>
        ))}
      </TodoList>
    </main>
  );
};

export default Content;
