// database/mongodb/init.js

// Create collections
db.createCollection("requirement_versions");
db.createCollection("agent_interactions");
db.createCollection("prototype_feedbacks");

// Create indexes
db.requirement_versions.createIndex({ projectId: 1, version: 1 });
db.agent_interactions.createIndex({ projectId: 1, timestamp: -1 });
db.prototype_feedbacks.createIndex({ projectId: 1, prototype_version: 1 });
