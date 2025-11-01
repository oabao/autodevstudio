-- database/postgresql/migrations/V3__add_rls_policies.sql

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE tech_stack_selections ENABLE ROW LEVEL SECURITY;

-- Create Policies
CREATE POLICY select_projects ON projects FOR SELECT USING (organization_id = (SELECT organization_id FROM organization_members WHERE user_id = current_user_id()));
CREATE POLICY select_project_requirements ON project_requirements FOR SELECT USING (project_id IN (SELECT id FROM projects));
CREATE POLICY select_tech_stack_selections ON tech_stack_selections FOR SELECT USING (project_id IN (SELECT id FROM projects));
