import React, { useState } from 'react';
import { Button, Input, List } from 'antd';

interface Comment {
  id: number;
  x: number;
  y: number;
  content: string;
}

const PrototypeFeedback: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isAddingComment) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClickPosition({ x, y });
  };

  const handleAddComment = () => {
    if (inputValue.trim() && clickPosition) {
      const newComment: Comment = {
        id: Date.now(),
        x: clickPosition.x,
        y: clickPosition.y,
        content: inputValue,
      };
      setComments([...comments, newComment]);
      setInputValue('');
      setClickPosition(null);
      setIsAddingComment(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsAddingComment(!isAddingComment)} style={{ marginBottom: 16 }}>
        {isAddingComment ? 'Cancel' : 'Add Comment'}
      </Button>
      <div style={{ position: 'relative', cursor: isAddingComment ? 'crosshair' : 'default' }} onClick={handleImageClick}>
        <img src="https://via.placeholder.com/800x600.png?text=Mock+UI+Prototype" alt="UI Prototype" style={{ width: '100%' }} />
        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              position: 'absolute',
              left: comment.x,
              top: comment.y,
              width: 24,
              height: 24,
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)',
            }}
            title={comment.content}
          >
            {comment.id.toString().slice(-2)}
          </div>
        ))}
      </div>
      {clickPosition && (
        <div style={{ marginTop: 16 }}>
          <Input.TextArea
            rows={3}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your feedback here..."
          />
          <Button onClick={handleAddComment} type="primary" style={{ marginTop: 8 }}>
            Submit Feedback
          </Button>
        </div>
      )}
      <List
        header={<div>Comments</div>}
        bordered
        dataSource={comments}
        renderItem={item => (
          <List.Item>
            {item.content}
          </List.Item>
        )}
        style={{ marginTop: 16 }}
      />
    </div>
  );
};

export default PrototypeFeedback;
