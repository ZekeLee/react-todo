import React from 'react';
import { ITodo } from './Content';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styled from 'styled-components';

const List = styled.ul`
  .drag {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px dotted #ccc;
  }
`;

interface IPropsData {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

interface DragResult {
  draggableId: string;
  type: string;
  source: Destination;
  reason: string;
  mode: string;
  destination?: Destination;
  combine?: any;
}

interface Destination {
  droppableId: string;
  index: number;
}

const TodoList = ({ todos, setTodos }: IPropsData) => {
  const handleDragEnd = (result: DragResult) => {
    // result 매개변수에는 source(드래그 한 원본 대상)의 정보와 destination(드래그 한 도착점)의 정보가 들어있다.
    if (result.destination) {
      const copyTodo = todos; // 1. 원본 할 일 목록 배열의 불변성을 지키기 위해 원본 배열을 복사한다.
      const [reorderedItem] = copyTodo.splice(result.source.index, 1); // 2. 변경시킬 아이템을 변수에 담고 배열에서 삭제한다.

      copyTodo.splice(result.destination.index, 0, reorderedItem); // 3. 배열의 도착지점의 인덱스에 삭제했던 아이템을 추가한다.
      setTodos(copyTodo); // 4. 변경된 배열로 할 일 목록 배열을 수정한다.
    }

    return;
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppableTodo">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo: ITodo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    className={`${snapshot.isDragging ? 'drag' : null}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
                  </li>
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

export default React.memo(TodoList);
