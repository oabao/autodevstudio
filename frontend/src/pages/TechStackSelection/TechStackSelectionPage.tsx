import React from 'react';
import { Typography } from 'antd';
import TechStackRecommendations from './TechStackRecommendations';

const { Title, Paragraph } = Typography;

const TechStackSelectionPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Technology Stack Selection</Title>
      <Paragraph>
        Based on your requirements, the AI has recommended the following technology stacks. Please select one to proceed.
      </Paragraph>
      <TechStackRecommendations />
    </div>
  );
};

export default TechStackSelectionPage;
