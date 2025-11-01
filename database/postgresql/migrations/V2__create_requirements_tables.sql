-- database/postgresql/migrations/V2__create_requirements_tables.sql

-- Requirements Table
CREATE TABLE project_requirements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id),
    feature_list JSONB,
    user_story_map JSONB,
    nfr_requirements JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tech Stack Selections Table
CREATE TABLE tech_stack_selections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id),
    recommended_stacks JSONB,
    selected_stack JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
