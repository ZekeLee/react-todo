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

  div {
    flex-grow: 1;
  }
`;

const Content = () => {
  return (
    <main>
      <TodoList>
        <TodoItem>
          <div>
            <input type="checkbox" id="1" />
            <label htmlFor="1">할 일</label>
          </div>
          <button type="button">❎</button>
        </TodoItem>
        <TodoItem>
          <div>
            <input type="checkbox" id="2" />
            <label htmlFor="2">할 일</label>
          </div>
          <button type="button">❎</button>
        </TodoItem>
        <TodoItem>
          <div>
            <input type="checkbox" id="3" />
            <label htmlFor="3">할 일</label>
          </div>
          <button type="button">❎</button>
        </TodoItem>
      </TodoList>
    </main>
  );
};

export default Content;
