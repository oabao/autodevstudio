import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import TechStackRecommendations from './TechStackRecommendations';
import { getTechStackRecommendations } from '../../services/api/techStackService';

const { Title, Paragraph } = Typography;

const TechStackSelectionPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [recommendations, setRecommendations] = useState<any>(null);

  useEffect(() => {
    if (projectId) {
      getTechStackRecommendations(projectId)
        .then(data => setRecommendations(data))
        .catch(error => console.error('Failed to fetch tech stack recommendations:', error));
    }
  }, [projectId]);

  if (!recommendations) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title level={2}>Technology Stack Selection</Title>
      <Paragraph>
        Based on your requirements, the AI has recommended the following technology stacks. Please select one to proceed.
      </Paragraph>
      <TechStackRecommendations recommendations={recommendations.recommendations} projectId={projectId} />
    </div>
  );
};

export default TechStackSelectionPage;
