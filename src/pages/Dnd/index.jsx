import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Index = () => {
  const dragEnd = (e) => {
    // 拖拽结束后
    // do something 。。。。
  };
  const list = [
    { name: '万', key: '1' },
    { name: '读', key: '2' },
  ];
  return (
    <DragDropContext onDragEnd={(e) => dragEnd(e)}>
      <div className="warp">
        <Droppable droppableId="box" direction="horizontal">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {list.map((item, idx) => (
                <Draggable draggableId={item.name} index={idx} key={item.name}>
                  {(provided) => (
                    <div
                      key={item.name}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>{item.name}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Index;
