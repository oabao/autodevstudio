import React, { useState, useEffect } from 'react';
import { Card, Radio, Space, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { selectTechStack } from '../../services/api/techStackService';

const { Text } = Typography;

interface Recommendation {
  id: string;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
}

interface TechStackRecommendationsProps {
  recommendations: Recommendation[];
  projectId?: string;
}

const TechStackRecommendations: React.FC<TechStackRecommendationsProps> = ({ recommendations, projectId }) => {
  const [selectedValue, setSelectedValue] = useState(recommendations.length > 0 ? recommendations[0].id : '');
  const navigate = useNavigate();

  useEffect(() => {
    if (recommendations.length > 0) {
      setSelectedValue(recommendations[0].id);
    }
  }, [recommendations]);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const handleConfirm = async () => {
    if (projectId) {
      const selectedStack = recommendations.find(rec => rec.id === selectedValue);
      try {
        await selectTechStack(projectId, selectedStack);
        navigate(`/projects/${projectId}/architecture`);
      } catch (error) {
        console.error('Failed to select tech stack:', error);
      }
    }
  };

  return (
    <div>
      <Radio.Group value={selectedValue} onChange={handleChange} style={{ width: '100%' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          {recommendations.map((rec) => (
            <Radio key={rec.id} value={rec.id} style={{ width: '100%' }}>
              <Card title={rec.name} style={{ marginTop: 16 }}>
                <p>{rec.description}</p>
                <Text strong>Pros:</Text>
                <ul>
                  {rec.pros.map(pro => <li key={pro}>{pro}</li>)}
                </ul>
                <Text strong>Cons:</Text>
                <ul>
                  {rec.cons.map(con => <li key={con}>{con}</li>)}
                </ul>
              </Card>
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      <Button type="primary" style={{ marginTop: 24 }} onClick={handleConfirm}>
        Confirm Selection
      </Button>
    </div>
  );
};

export default TechStackRecommendations;
