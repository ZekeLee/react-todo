import { ITodo } from './Content';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppableTodo">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo: ITodo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
