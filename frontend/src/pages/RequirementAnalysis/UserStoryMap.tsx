import React from 'react';
import { Card, Timeline } from 'antd';

const UserStoryMap: React.FC = () => {
  return (
    <Card title="User Story Map">
      <Timeline>
        <Timeline.Item color="green">
          <strong>User Activity:</strong> Search for products
          <br />
          <strong>User Task:</strong> Find the search bar and enter a query
          <br />
          <strong>User Story:</strong> As a user, I want to be able to search for products so that I can find what I'm looking for.
        </Timeline.Item>
        <Timeline.Item color="green">
          <strong>User Activity:</strong> View product details
          <br />
          <strong>User Task:</strong> Click on a product to see more information
          <br />
          <strong>User Story:</strong> As a user, I want to view detailed information about a product so that I can make an informed purchase decision.
        </Timeline.Item>
        <Timeline.Item color="blue">
          <strong>User Activity:</strong> Add to cart
          <br />
          <strong>User Task:</strong> Click the "Add to Cart" button
          <br />
          <strong>User Story:</strong> As a user, I want to add products to my cart so that I can purchase them.
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default UserStoryMap;
