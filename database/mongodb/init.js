// Create collections and indexes for AutoDevStudio

db.createCollection("requirement_versions");
db.createCollection("prototype_feedbacks");
db.createCollection("agent_logs");

db.requirement_versions.createIndex({ projectId: 1, version: -1 });
db.prototype_feedbacks.createIndex({ projectId: 1, createdAt: -1 });
db.agent_logs.createIndex({ workflowId: 1, timestamp: 1 });
