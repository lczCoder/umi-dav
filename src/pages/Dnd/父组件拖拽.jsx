import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  display: 'flex',
  width: 850,
});
const getListStyle1 = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

export default class App extends React.Component {
  state = {
    items: getItems(3),
    selected: getItems(5, 10),
  };

  id2List = {
    droppable: 'items',
    droppable2: 'selected',
  };

  getList = (id) => this.state[this.id2List[id]];

  onDragEnd = (result) => {
    console.log('result', result);
  };
  render() {
    // console.log(this.state.items);
    // console.log(this.state.selected);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'spaceBetween',
        }}
      >
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="board" type="COLUMN" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.items.map((item1, index) => (
                  <div key={index}>
                    <Draggable
                      key={item1.id}
                      draggableId={item1.id}
                      type="COLUMN1"
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h1>{item1.id}</h1>
                          <Droppable
                            droppableId={'droppable' + item1.id}
                            // type={item1.id}
                            type="item"
                            direction="vertical"
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                style={getListStyle1(snapshot.isDraggingOver)}
                              >
                                {this.state.selected.map((item, index) => (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id + item1.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                          snapshot.isDragging,
                                          provided.draggableProps.style,
                                        )}
                                      >
                                        {item.content}-{item.id}-{item1.id}
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      )}
                    </Draggable>
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}
