import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
const Index = () => {
  const onDragStart = () => {};
  const onDragUpdate = () => {};
  const onDragEnd = () => {};
  return (
    <>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey',
              }}
              {...provided.droppableProps}
            >
              <h2>I am a droppable!</h2>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Index;
