import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import style from './style.less';
import _ from 'lodash';

const Index = () => {
  const dragEnd = (result) => {
    console.log('e', result);
    const sourceIndex = result.source.index; // 起始位置
    const destinationIndex = result.destination
      ? result.destination.index
      : null; // 结束位置
    if (sourceIndex === destinationIndex || !destinationIndex) {
      return;
    }
    const listDeep = _.cloneDeep(list);
    const [current] = listDeep.splice(sourceIndex, 1);
    listDeep.splice(destinationIndex, 0, current);
    setList(listDeep);
  };
  const [list, setList] = useState([
    { name: '广点通', key: '1' },
    { name: '巨量引擎', key: '2' },
    { name: '超级汇川', key: '3' },
    { name: '百度信息流', key: '4' },
    { name: 'OPPO', key: '5' },
    { name: 'VIVO', key: '6' },
  ]);

  return (
    <DragDropContext onDragEnd={(e) => dragEnd(e)}>
      <div className={style.warp}>
        <Droppable droppableId="box">
          {(provided) => (
            <div
              className={style.box}
              ref={provided.innerRef}
              {...provided.droppableProps}
              {...provided.dragHandleProps}
            >
              {list.map((item, idx) => (
                <Draggable draggableId={item.name} index={idx} key={item.name}>
                  {(provided, snapshot) => (
                    <div
                      className={style.item}
                      key={item.name}
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: provided.isDragging
                          ? 'green'
                          : 'lightblue',
                      }}
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
