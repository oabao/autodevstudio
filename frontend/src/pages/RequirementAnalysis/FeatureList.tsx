import React, { useState } from 'react';
import { List, Card, Button } from 'antd';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

const initialFeatures = [
  { id: '1', name: 'User Authentication', description: 'Users can sign up and log in.' },
  { id: '2', name: 'Project Dashboard', description: 'Display a list of user projects.' },
  { id: '3', name: 'Payment Integration', description: 'Allow users to pay for services.' },
];

const FeatureList: React.FC = () => {
  const [features, setFeatures] = useState(initialFeatures);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(features);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFeatures(items);
  };

  return (
    <Card title="Feature List">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="features">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <List
                dataSource={features}
                renderItem={(item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <List.Item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card title={item.name} size="small" style={{ width: '100%' }}>
                          {item.description}
                        </Card>
                      </List.Item>
                    )}
                  </Draggable>
                )}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button style={{ marginTop: 16 }}>Add Feature</Button>
    </Card>
  );
};

export default FeatureList;
