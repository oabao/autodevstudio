import React, { useState, useEffect } from 'react';
import { List, Card, Button } from 'antd';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

interface Feature {
  id: string;
  name: string;
  description: string;
}

interface FeatureListProps {
  initialFeatures: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ initialFeatures }) => {
  const [features, setFeatures] = useState(initialFeatures);

  useEffect(() => {
    setFeatures(initialFeatures);
  }, [initialFeatures]);

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
