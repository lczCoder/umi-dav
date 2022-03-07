import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import style from './style.less';
import _ from 'lodash';

const Index = () => {
  const dragEnd = (result) => {
    console.log('e', result);
    const sourceIndex = result.source.index; // 起始位置
    const destinationIndex = result.destination.index; // 结束位置
    if (sourceIndex === destinationIndex) {
      return;
    }
    const listDeep = _.cloneDeep(list);
    const [current] = listDeep.splice(sourceIndex, 1);
    listDeep.splice(destinationIndex, 0, current);
    setList(listDeep);
  };
  const [list, setList] = useState([
    { name: '万', key: '1' },
    { name: '读', key: '2' },
    { name: 'x', key: '3' },
    { name: 'b', key: '4' },
    { name: 'q', key: '5' },
    { name: 'w', key: '6' },
  ]);

  return (
    <DragDropContext onDragEnd={(e) => dragEnd(e)}>
      <div className={style.warp}>
        <Droppable droppableId="box" direction="horizontal">
          {(provided) => (
            <div
              className={style.box}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {list.map((item, idx) => (
                <Draggable draggableId={item.name} index={idx} key={item.name}>
                  {(provided) => (
                    <div
                      className={style.item}
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
