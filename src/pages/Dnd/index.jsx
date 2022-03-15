import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import __ from './index.less';

const Index = () => {
  const [list, setList] = useState([
    { id: 1, context: '第一层' },
    { id: 2, context: '第二层' },
    { id: 3, context: '第三层' },
  ]);

  const onDragEnd = () => {
    console.log('拖拽结束回调事件');
  };

  return (
    <>
      <h1>拖拽组件Demo</h1>
      <div className={__.warp}>
        <DragDropContext onDragEnd={onDragEnd}></DragDropContext>
      </div>
    </>
  );
};

export default Index;
