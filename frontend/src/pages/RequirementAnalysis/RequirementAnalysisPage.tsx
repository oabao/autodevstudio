import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Card } from 'antd';
import mockData from '../../data/requirements.json';

// Function to reorder the list
const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const RequirementAnalysisPage: React.FC = () => {
  const [features, setFeatures] = useState<any[]>([]);

  useEffect(() => {
    setFeatures(mockData.features);
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const reorderedFeatures = reorder(
      features,
      result.source.index,
      result.destination.index
    );

    setFeatures(reorderedFeatures);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="features">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {features.map((feature, index) => (
              <Draggable key={feature.id} draggableId={feature.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      marginBottom: 8,
                      ...provided.draggableProps.style,
                    }}
                  >
                    <Card title={feature.name} size="small">
                      <p>{feature.description}</p>
                    </Card>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RequirementAnalysisPage;
