import React from 'react';
import ProjectInitForm from './ProjectInitForm';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ProjectInitPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Create a New Project</Title>
      <Paragraph>
        Provide the details for your new project. You can include a description, upload relevant documents, and provide URLs to external resources.
      </Paragraph>
      <ProjectInitForm />
    </div>
  );
};

export default ProjectInitPage;
