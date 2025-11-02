import React, { useState, useEffect } from 'react';
import { Card, Button, Input, List, Spin, Alert, message } from 'antd';
import { useParams } from 'react-router-dom';
import { getPrototype } from '../../services/api/projectService';
import { submitFeedback } from '../../services/api/feedbackService';

const { TextArea } = Input;

const PrototypeFeedback: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [prototype, setPrototype] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchPrototype = async () => {
        if (!projectId) return;
        try {
            setLoading(true);
            setError(null);
            const response = await getPrototype(projectId);
            setPrototype(JSON.parse(response.result));
        } catch (err) {
            setError('Failed to fetch UI prototype.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    fetchPrototype();
  }, [projectId]);

  const handleAddFeedback = async () => {
    if (!newFeedback.trim() || !projectId) return;

    setSubmitting(true);
    try {
        await submitFeedback(projectId, newFeedback);
        setFeedback([...feedback, newFeedback]);
        setNewFeedback('');
        message.success('Feedback submitted successfully!');
    } catch (error) {
        message.error('Failed to submit feedback.');
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <Card title="UI Prototype Feedback">
      <div style={{ marginBottom: 16, border: '1px solid #f0f0f0', padding: 16 }}>
        {loading && <Spin />}
        {error && <Alert message={error} type="error" />}
        {prototype && (
            <pre>{JSON.stringify(prototype, null, 2)}</pre>
        )}
      </div>
      <List
        header={<div>Feedback Comments</div>}
        bordered
        dataSource={feedback}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        style={{ marginBottom: 16 }}
      />
      <TextArea
        rows={3}
        value={newFeedback}
        onChange={(e) => setNewFeedback(e.target.value)}
        placeholder="Add your feedback here..."
        disabled={submitting}
      />
      <Button onClick={handleAddFeedback} type="primary" style={{ marginTop: 16 }} loading={submitting}>
        Submit Feedback
      </Button>
    </Card>
  );
};

export default PrototypeFeedback;
