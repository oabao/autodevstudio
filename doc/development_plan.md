
# AutoDevStudio 项目架构与开发蓝图

## 第一阶段：项目架构蓝图

### 1.1 完整项目目录树（代码生成文件目录时请忽略编号，该编号仅为开发计划服务）

```
000_autodevstudio/
├── 001_README.md                                 # 项目总览和快速启动指南
├── 002_docs/                                     # 项目文档
│   ├── 003_architecture_design.md                # 架构设计文档
│   ├── 004_functional_requirements.md            # 功能需求文档（URS）
│   ├── 005_technical_requirements.md             # 技术需求文档（TRS）
│   └── 006_nfr_details.md                        # 非功能性需求详细说明
├── 007_frontend/                                 # 前端应用 (React + TypeScript)
│   ├── 008_package.json                          # 前端依赖管理
│   ├── 009_vite.config.ts                        # Vite 构建配置
│   ├── 010_tsconfig.json                         # TypeScript 配置
│   ├── 011_src/
│   │   ├── 012_main.tsx                          # 应用入口
│   │   ├── 013_App.tsx                           # 主应用组件
│   │   ├── 014_assets/                           # 静态资源
│   │   ├── 015_components/                       # 通用UI组件
│   │   │   ├── 016_common/                       # 基础通用组件
│   │   │   │   ├── 017_Button/Button.tsx
│   │   │   │   └── 018_Input/Input.tsx
│   │   │   ├── 019_layout/                       # 布局组件
│   │   │   │   ├── 020_Header.tsx
│   │   │   │   └── 021_Sidebar.tsx
│   │   │   ├── 022_forms/                        # 表单相关组件
│   │   │   │   └── 023_FileUpload/FileUpload.tsx
│   │   │   └── 024_charts/                       # 图表组件
│   │   │       └── 025_ProgressChart/ProgressChart.tsx
│   │   ├── 026_pages/                            # 页面级别组件
│   │   │   ├── 027_ProjectInit/                  # F-1.1 项目初始化
│   │   │   │   ├── 028_ProjectInitPage.tsx
│   │   │   │   └── 029_ProjectInitForm.tsx
│   │   │   ├── 030_RequirementAnalysis/          # F-2.x 需求分析
│   │   │   │   ├── 031_RequirementAnalysisPage.tsx
│   │   │   │   ├── 032_FeatureList.tsx
│   │   │   │   ├── 033_UserStoryMap.tsx
│   │   │   │   └── 034_NFRWizard.tsx
│   │   │   ├── 035_TechStackSelection/           # F-3.1 技术选型
│   │   │   │   ├── 036_TechStackSelectionPage.tsx
│   │   │   │   └── 037_TechStackRecommendations.tsx
│   │   │   ├── 038_ArchitectureDesign/           # F-4.x 架构与设计
│   │   │   │   ├── 039_ArchitectureDesignPage.tsx
│   │   │   │   ├── 040_ArchitectureDiagrams.tsx
│   │   │   │   └── 041_PrototypeFeedback.tsx     # F-4.2 原型反馈
│   │   │   ├── 042_Development/                  # F-5.x 开发与测试
│   │   │   │   ├── 043_DevelopmentDashboard.tsx  # F-5.3 实时进度看板
│   │   │   │   ├── 044_TestCaseViewer.tsx        # F-5.1 测试用例
│   │   │   │   └── 045_DebugAssistant.tsx        # F-5.4 AI调试助手
│   │   │   ├── 046_Delivery/                     # F-6.x 交付与文档
│   │   │   │   ├── 047_DeliveryPage.tsx
│   │   │   │   └── 048_DocumentationViewer.tsx
│   │   │   ├── 049_Billing/                      # F-7.x 商业化功能
│   │   │   │   ├── 050_BillingPage.tsx
│   │   │   │   └── 051_UsageMonitor.tsx
│   │   │   └── 052_Maintenance/                  # F-8.x 持续演进与维护
│   │   │       ├── 053_DeploymentPage.tsx        # F-8.1 一键部署
│   │   │       ├── 054_AIMonitoringPage.tsx      # F-8.2 智能运维
│   │   │       └── 055_NewFeatureRequestForm.tsx # F-8.3 增量功能开发
│   │   ├── 056_stores/                           # Zustand 状态管理
│   │   │   ├── 057_projectStore.ts
│   │   │   ├── 058_requirementStore.ts
│   │   │   ├── 059_developmentStore.ts
│   │   │   └── 060_userStore.ts
│   │   ├── 061_services/                         # API 服务调用
│   │   │   ├── 062_api/                          # REST API 客户端
│   │   │   │   ├── 063_authService.ts
│   │   │   │   └── 064_projectService.ts
│   │   │   ├── 065_websocket/                    # WebSocket 客户端
│   │   │   └── 066_agents/                       # Agent 交互服务
│   │   │       └── 067_debuggerAgentService.ts
│   │   ├── 068_types/                            # TypeScript 类型定义
│   │   ├── 069_utils/                            # 工具函数
│   │   └── 070_hooks/                            # 自定义 Hooks
│   └── 071_styles/                               # 全局样式
│       └── 072_index.css
├── 073_backend/                                  # 后端微服务
│   ├── 074_api-gateway/                          # API Gateway (Kong/Spring Cloud Gateway)
│   │   ├── 075_Dockerfile
│   │   ├── 076_kong.yaml                         # Kong 配置
│   │   └── 077_plugins/                          # Gateway插件 (AuthN/AuthZ, Rate Limiting)
│   │       └── 078_key_auth_plugin.yaml
│   ├── 079_workflow-orchestration-service/       # 工作流编排服务 (Temporal)
│   │   ├── 080_pom.xml                           # Maven 配置
│   │   ├── 081_Dockerfile
│   │   ├── 082_src/main/java/com/autodevstudio/workflow/
│   │   │   ├── 083_WorkflowService.java          # 启动工作流
│   │   │   ├── 084_SoftwareDevelopmentWorkflow.java # 工作流定义
│   │   │   └── 085_activities/                   # 工作流活动（调用Agent Coordination Service）
│   │   │       └── 086_AgentActivities.java
│   │   └── 087_config/application.properties
│   ├── 088_agent-coordination-service/           # Agent协调服务 (Python)
│   │   ├── 089_requirements.txt                  # Python 依赖
│   │   ├── 090_Dockerfile
│   │   ├── 091_src/
│   │   │   ├── 092_main.py                       # 服务启动
│   │   │   ├── 093_agent_coordinator.py          # Agent调度逻辑
│   │   │   ├── 094_agent_registry.py             # Agent注册与发现
│   │   │   ├── 095_agents/                       # AI Agent实现
│   │   │   │   ├── 096_base_agent.py             # Agent基类
│   │   │   │   ├── 097_orchestrator_agent.py
│   │   │   │   ├── 098_requirement_agent.py
│   │   │   │   ├── 099_techstack_agent.py
│   │   │   │   ├── 100_architect_agent.py
│   │   │   │   ├── 101_prototype_agent.py
│   │   │   │   ├── 102_test_agent.py
│   │   │   │   ├── 103_coder_agent.py
│   │   │   │   ├── 104_docwriter_agent.py
│   │   │   │   ├── 105_feedback_agent.py         # 新增：F-4.2
│   │   │   │   ├── 106_debugger_agent.py         # 新增：F-5.4
│   │   │   │   ├── 107_security_agent.py         # 新增：S-3, S-4, S-5
│   │   │   │   └── 108_refactor_agent.py         # 新增：E-1, M-1
│   │   │   ├── 109_llm_client.py                 # LLM 接口封装
│   │   │   └── 110_vector_db_client.py           # 向量数据库接口
│   │   └── 111_config.py
│   ├── 112_user-billing-service/                 # 用户与计费服务 (Java/Go/Node.js - 假设Java)
│   │   ├── 113_pom.xml
│   │   ├── 114_Dockerfile
│   │   ├── 115_src/main/java/com/autodevstudio/userbilling/
│   │   │   ├── 116_UserController.java           # 用户注册、登录、管理 (F-7.1)
│   │   │   ├── 117_BillingController.java        # 计费、订阅、用量查询 (F-7.2, F-7.3)
│   │   │   ├── 118_UserRepository.java
│   │   │   └── 119_SubscriptionService.java
│   │   └── 120_config/application.properties
│   ├── 121_artifact-service/                     # 产物服务 (Java/Go/Node.js - 假设Java)
│   │   ├── 122_pom.xml
│   │   ├── 123_Dockerfile
│   │   ├── 124_src/main/java/com/autodevstudio/artifact/
│   │   │   ├── 125_CodeRepositoryManager.java    # 代码存储与版本 (Git)
│   │   │   ├── 126_DocumentManager.java          # 文档存储与版本
│   │   │   └── 127_ArtifactStorageService.java   # 对象存储接口
│   │   └── 128_config/application.properties
│   └── 129_shared-libraries/                     # 跨服务共享库 (例如：ProtoBuf定义)
│       └── 130_protobuf/autodevstudio.proto
├── 131_database/                                 # 数据库脚本和配置
│   ├── 132_postgresql/
│   │   ├── 133_init.sql                          # PostgreSQL 初始化脚本
│   │   └── 134_migrations/                       # 数据库迁移脚本
│   │       ├── 135_V1__create_users_projects_tables.sql
│   │       ├── 136_V2__create_requirements_tables.sql
│   │       └── 137_V3__add_rls_policies.sql      # RLS策略
│   ├── 138_mongodb/                              # MongoDB 集合定义和索引
│   │   └── 139_init.js
│   ├── 140_vector-db/                            # 向量数据库 Schema 定义
│   │   └── 141_schema.py
│   └── 142_redis/                                # Redis 配置
│       └── 143_redis.conf
├── 144_devops/                                   # 部署与运维
│   ├── 145_kubernetes/                           # Kubernetes 配置
│   │   ├── 146_namespace.yaml
│   │   ├── 147_api-gateway-deployment.yaml
│   │   ├── 148_workflow-service-deployment.yaml
│   │   ├── 149_agent-service-deployment.yaml
│   │   ├── 150_user-billing-service-deployment.yaml
│   │   ├── 151_artifact-service-deployment.yaml
│   │   ├── 152_database-deployments.yaml         # PG, Mongo, Redis
│   │   ├── 153_ingress.yaml
│   │   └── 154_secrets.yaml
│   ├── 155_terraform/                            # Terraform IaC
│   │   ├── 156_main.tf                           # 主要云资源定义 (VPC, K8s Cluster, S3, RDS)
│   │   ├── 157_variables.tf
│   │   └── 158_outputs.tf
│   ├── 159_argocd/                               # GitOps 配置
│   │   └── 160_applications/
│   │       ├── 161_autodevstudio-app.yaml
│   │       └── 162_monitoring-app.yaml
│   ├── 163_ci-cd/                                # CI/CD 流水线定义
│   │   ├── 164_jenkinsfile                       # 或 GitLab CI/GitHub Actions 配置
│   │   └── 165_security_scans.groovy             # SAST/SCA/DAST 阶段
│   └── 166_monitoring/                           # 可观测性配置
│       ├── 167_prometheus-rules.yaml             # Prometheus 告警规则
│       ├── 168_grafana-dashboards/               # Grafana 仪表盘定义
│       │   └── 169_autodevstudio-dashboard.json
│       ├── 170_loki-config.yaml                  # 日志聚合配置
│       └── 171_tempo-config.yaml                 # 分布式追踪配置
├── 172_security/                                 # 安全相关工具和配置
│   ├── 173_code-sandbox/                         # 代码沙箱环境
│   │   ├── 174_firecracker_config.yaml
│   │   ├── 175_code_sandbox_executor.py          # 执行器逻辑
│   │   └── 176_network_policy.json
│   ├── 177_sbom/                                 # 软件物料清单生成工具
│   │   └── 178_sbom_generator.py
│   └── 179_prompt_safety/                        # Prompt 安全过滤
│       └── 180_prompt_filter.py
├── 181_ai_observability/                         # AI 可观测性
│   ├── 182_ai_metrics_collector.py               # 指标收集器
│   ├── 183_langsmith_integration.py              # LangSmith集成
│   └── 184_llm_cache_monitor.py                  # LLM缓存监控
├── 185_utils/                                    # 项目级通用工具
│   └── 186_id_generator.py
└── 187_tests/                                    # E2E 测试
    └── 188_e2e_scenarios.feature                 # Gherkin 特性文件
```

### 1.2 技术栈约束表

| 类别         | 组件/层级             | 技术选型                                                         | 核心职责                                   |
| :--------- | :---------------- | :----------------------------------------------------------- | :------------------------------------- |
| **前端**     | **框架**            | React 18+                                                    | 构建用户界面                                 |
|            | **语言**            | TypeScript 5+                                                | 提供类型安全                                 |
|            | **构建工具**          | Vite 4+                                                      | 快速开发和构建                                |
|            | **状态管理**          | Zustand 4+ / Redux Toolkit (根据复杂性)                           | 管理应用全局状态                               |
|            | **UI 组件库**        | Ant Design 5+                                                | 提供美观且功能丰富的UI组件                         |
|            | **组件开发/文档**       | Storybook 7+                                                 | 隔离开发UI组件，生成组件文档                        |
| **后端**     | **总体架构**          | 微服务，前后端分离                                                    | 松耦合，高扩展性                               |
|            | **API Gateway**   | Kong / Spring Cloud Gateway                                  | 统一入口、路由、认证、限流                          |
|            | **工作流编排**         | Temporal (Java SDK)                                          | 编排复杂、有状态的开发流程，保证可靠性                    |
|            | **Agent协调服务**     | Python (FastAPI/Flask)                                       | 管理AI Agent生命周期、任务分发、状态同步               |
|            | **用户与计费服务**       | Java (Spring Boot) / Go (Gin) / Node.js (Express)            | 用户管理、认证、授权、项目管理、计费逻辑                   |
|            | **产物服务**          | Java (Spring Boot) / Go (Gin) / Node.js (Express)            | 代码、文档、镜像等产物的存储和版本管理                    |
| **AI 层**   | **Agent 框架**      | 自定义 Python 框架 (基于 `BaseAgent` 实现)                            | 统一Agent行为、LLM调用、RAG能力                  |
|            | **LLM 提供商**       | OpenAI API / Claude API (或其他商业或私有模型)                         | 提供核心AI能力，支持多模型路由                       |
| **数据存储**   | **结构化数据**         | PostgreSQL (启用 Row-Level Security)                           | 用户、项目元数据、订单、工作流状态                      |
|            | **半/非结构化数据**      | MongoDB                                                      | 需求文档、Agent交互日志、设计文档中间版本、原型反馈           |
|            | **向量数据库**         | Pinecone / Weaviate                                          | 存储代码/文档 Embeddings，支持RAG、语义搜索、代码相似度分析  |
|            | **高速缓存/队列**       | Redis                                                        | 会话管理、缓存、分布式锁、消息队列                      |
|            | **对象存储**          | S3-compatible Storage (如 AWS S3, MinIO)                      | 代码仓库快照、容器镜像、UI原型文件、交付包                 |
| **DevOps** | **容器化**           | Docker                                                       | 所有服务容器化                                |
|            | **容器编排**          | Kubernetes (K8s)                                             | 服务部署、发现、伸缩、自愈                          |
|            | **基础设施即代码 (IaC)** | Terraform                                                    | 管理云资源 (K8s集群、VPC、数据库、存储)               |
|            | **持续集成/持续部署**     | Jenkins / GitLab CI / GitHub Actions + ArgoCD (GitOps)       | 自动化代码构建、测试、部署；声明式CD                    |
|            | **可观测性**          | Prometheus (指标), Loki (日志), Tempo/Jaeger (追踪), Grafana (可视化) | 全链路监控、告警、故障排查                          |
|            | **AI 可观测性**       | LangSmith / Arize AI (或自建方案)                                 | 追踪Agent决策链、Prompt/Response、Token消耗、幻觉率 |
| **安全性**    | **代码执行沙箱**        | Firecracker / gVisor                                         | 隔离AI生成代码的测试执行环境                        |
|            | **供应链安全**         | Snyk / Dependabot (SCA), SBOM 生成工具, SLSA Level 3 验证          | 依赖漏洞扫描、软件物料清单、构建安全标准                   |
|            | **Prompt & 模型安全** | 自定义 Prompt 过滤机制，AI生成内容安全扫描                                   | 防范Prompt注入，防止输出不安全代码                   |
| **其他**     | **语言**            | Java (后端服务, Temporal), Python (Agent服务), TypeScript (前端)     | 根据现有生态和Agent开发便利性选择                    |

---

## 第二阶段：模块化开发计划

#### 模块划分规范说明

* **垂直拆分**：模块按 AutoDevStudio 的主要业务流程和技术领域（例如项目初始化、需求分析、Agent协调、用户与计费、部署运维）进行划分，确保每个模块功能完整且内聚。
* **接口明确定义**：每个模块对外提供清晰的 API 接口契约，包括请求/响应的数据结构、参数约束和错误码。
* **独立测试性**：每个模块应具备独立的单元测试、集成测试，以确保其功能的正确性和稳定性。

---

### 模块 A01: 用户认证与授权 (F-7.1, S-2)

**功能范围**：处理用户注册、登录（OAuth 2.0/OIDC）、会话管理、权限管理（RBAC）和多租户（组织）隔离。

**文件清单**：

| 编号  | 文件路径                                                                  | 类型    | 核心职责              | 关键依赖               |
| --- | --------------------------------------------------------------------- | ----- | ----------------- | ------------------ |
| 116 | `backend/user-billing-service/src/.../UserController.java`            | 后端代码  | 用户注册、登录、OAuth回调   | 118, 119, 133, 135 |
| 118 | `backend/user-billing-service/src/.../UserRepository.java`            | 后端代码  | 用户数据持久化操作         | 133, 135           |
| 063 | `frontend/src/services/api/authService.ts`                            | 前端代码  | 封装认证相关API调用       | 062                |
| 060 | `frontend/src/stores/userStore.ts`                                    | 前端代码  | 用户认证状态管理          | 无                  |
| 135 | `database/postgresql/migrations/V1__create_users_projects_tables.sql` | 数据库脚本 | 用户表结构和索引定义        | 133                |
| 078 | `backend/api-gateway/plugins/key_auth_plugin.yaml`                    | 网关配置  | API Gateway认证插件配置 | 076                |

**接口契约**：

* **输入接口 (User-Billing Service API)**：

  * `POST /api/user/register`

    * 参数：`{ email: string, password: string, name: string }`
    * 约束：`email` 唯一且有效，`password` 复杂度满足要求。
    * 数据格式：JSON
  * `POST /api/user/login`

    * 参数：`{ email: string, password: string }`
    * 约束：用户名密码正确
    * 数据格式：JSON
  * `GET /api/user/oauth/callback?code=...`

    * 参数：`{ code: string }` (OAuth授权码)
    * 约束：有效的授权码
    * 数据格式：URL Query Params
* **输出接口 (User-Billing Service API)**：

  * 成功：`{ token: string, user: UserProfile }` (JWT或会话ID)
  * 失败：`{ error: string, message: string, status: number }`
* **RBAC (内部接口)**：

  * `checkPermission(userId: UUID, resource: string, action: string) -> boolean`
  * `getOrganizationsForUser(userId: UUID) -> List<Organization>`
  * `getCurrentUserId() -> UUID` (通过安全上下文获取)

**测试策略**：

* **单元测试覆盖点**：

  * `UserController.register()`：用户注册成功、邮箱重复、密码不符规范。
  * `UserRepository`：数据增删改查隔离性。
  * `authService.login()`：正常登录、失败登录。
* **集成测试场景**：

  * 用户从前端发起注册请求，通过API Gateway，User-Billing Service处理，数据存入PostgreSQL，并返回Token。
  * 用户使用Token访问受保护的API，API Gateway进行认证和鉴权。
* **端到端测试流程**：

  * 新用户注册 -> 登录 -> 访问项目列表（空） -> 验证多租户隔离。

---

### 模块 A02: 项目初始化 (F-1.1)

**功能范围**：提供用户创建新项目的引导界面，支持多种形式的初始需求输入，并在后端创建项目空间和触发需求分析工作流。

**文件清单**：

| 编号  | 文件路径                                                                              | 类型    | 核心职责                     | 关键依赖                  |
| --- | --------------------------------------------------------------------------------- | ----- | ------------------------ | --------------------- |
| 028 | `frontend/src/pages/ProjectInit/ProjectInitPage.tsx`                              | 前端代码  | 项目初始化页面渲染，表单管理           | 029, 064              |
| 029 | `frontend/src/pages/ProjectInit/ProjectInitForm.tsx`                              | 前端代码  | 接收用户输入（名称、描述、URL、文件）     | 023                   |
| 064 | `frontend/src/services/api/projectService.ts`                                     | 前端代码  | 调用后端 `createProject` API | 062                   |
| 083 | `backend/workflow-orchestration-service/src/.../WorkflowService.java`             | 后端代码  | 接收创建项目请求，启动工作流           | 084                   |
| 084 | `backend/workflow-orchestration-service/src/.../SoftwareDevelopmentWorkflow.java` | 后端代码  | 定义项目创建工作流的初始步骤           | 086                   |
| 135 | `database/postgresql/migrations/V1__create_users_projects_tables.sql`             | 数据库脚本 | `projects` 表结构定义         | 133                   |
| 127 | `backend/artifact-service/src/.../ArtifactStorageService.java`                    | 后端代码  | 处理文档上传至对象存储              | S3-compatible Storage |

**接口契约**：

* **输入接口 (Workflow Orchestration Service API)**：

  * `POST /api/workflow/projects`

    * 参数：`{ projectId: UUID, name: string, description: string, inputSources: { text?: string, documents?: FileRef[], urls?: { competitor?: string, marketAnalysis?: string, design?: string } } }`
    * 约束：`name` 非空，`inputSources` 至少一项。`FileRef` 包含对象存储路径。
    * 数据格式：JSON
* **输出接口 (Workflow Orchestration Service API)**：

  * 成功：`{ workflowId: string, projectId: UUID, status: "initializing" }`
  * 失败：`{ error: string, message: string, status: number }`

**测试策略**：

* **单元测试覆盖点**：

  * `ProjectInitForm`：表单验证、不同输入源的正确处理。
  * `WorkflowService.startProjectWorkflow()`：确保工作流启动参数正确。
* **集成测试场景**：

  * 前端提交带文档URL和文本描述的项目请求，后端成功接收，并启动一个Temporal工作流，数据库中创建项目记录。
* **端到端测试流程**：

  * 用户在UI界面填写项目信息，上传文档和链接，点击创建。系统显示项目初始化中，并可在后端追踪到工作流状态。

---

### 模块 A03: 需求分析 (F-2.1, F-2.2, F-2.3)

**功能范围**：接收初始需求，AI自动拆解为功能点、生成用户故事地图、优先级排序，识别非功能性需求，并支持用户交互式确认和修改。

**文件清单**：

| 编号  | 文件路径                                                                  | 类型    | 核心职责                        | 关键依赖               |
| --- | --------------------------------------------------------------------- | ----- | --------------------------- | ------------------ |
| 031 | `frontend/src/pages/RequirementAnalysis/RequirementAnalysisPage.tsx`  | 前端代码  | 需求分析页面渲染                    | 032, 033, 034, 058 |
| 032 | `frontend/src/pages/RequirementAnalysis/FeatureList.tsx`              | 前端代码  | 展示功能点清单，支持编辑、拖拽             | 058                |
| 033 | `frontend/src/pages/RequirementAnalysis/UserStoryMap.tsx`             | 前端代码  | 展示用户故事地图，支持优先级调整            | 058                |
| 034 | `frontend/src/pages/RequirementAnalysis/NFRWizard.tsx`                | 前端代码  | 引导式非功能性需求定义界面               | 058                |
| 058 | `frontend/src/stores/requirementStore.ts`                             | 前端代码  | 需求相关状态管理                    | 无                  |
| 086 | `backend/workflow-orchestration-service/src/.../AgentActivities.java` | 后端代码  | 调用 `RequirementAgent`       | 093, 098           |
| 093 | `backend/agent-coordination-service/src/agent_coordinator.py`         | 后端代码  | 调度 `RequirementAgent`       | 094, 098           |
| 098 | `backend/agent-coordination-service/src/agents/requirement_agent.py`  | 后端代码  | 实现需求拆解、故事地图、NFR识别           | 109, 110           |
| 136 | `database/postgresql/migrations/V2__create_requirements_tables.sql`   | 数据库脚本 | `project_requirements` 表定义  | 133                |
| 139 | `database/mongodb/init.js`                                            | 数据库脚本 | `requirement_versions` 集合定义 | 无                  |

**接口契约**：

* **输入接口 (Agent Coordination Service API)**：

  * `POST /api/agents/requirement/analyze`

    * 参数：`{ projectId: UUID, initialRequirements: string, inputSources: {...} }`
    * 约束：`projectId` 存在，`initialRequirements` 非空。
    * 数据格式：JSON
  * `POST /api/agents/requirement/confirm` (由Workflow Service调用)

    * 参数：`{ projectId: UUID, featureList: JSONB, userStoryMap: JSONB, nfrRequirements: JSONB, confirmedBy: UUID }`
    * 约束：所有字段符合预期结构。
    * 数据格式：JSON
* **输出接口 (Agent Coordination Service API)**：

  * 成功：`{ featureList: JSONB, userStoryMap: JSONB, nfrRequirements: JSONB }`
  * 失败：`{ error: string, message: string }`
* **信号方法 (Temporal Workflow)**：

  * `confirmRequirements(confirmation: RequirementConfirmation)`：用户在前端确认需求后，前端通知后端，后端通过Temporal信号通知工作流。

**测试策略**：

* **单元测试覆盖点**：

  * `RequirementAgent`：

    * 传入不同复杂度的自然语言需求，验证功能点拆解的准确性。
    * 验证NFR识别的完整性（性能、安全、合规等）。
  * 前端拖拽、编辑功能点是否正确更新状态。
* **集成测试场景**：

  * 用户提交初始需求，`RequirementAgent` 生成结果，前端页面展示；用户修改优先级并确认，工作流收到信号并更新数据库。
* **端到端测试流程**：

  * 用户通过UI输入项目需求，系统展示初步功能清单和用户故事地图。用户在UI上调整优先级，添加NFR，并最终确认。

---

### 模块 A04: 技术选型 (F-3.1)

**功能范围**：基于已确认的需求，由AI推荐多种技术栈方案，提供优缺点、成本和风险分析，并允许用户进行选择和确认。

**文件清单**：

| 编号  | 文件路径                                                                  | 类型    | 核心职责                        | 关键依赖     |
| --- | --------------------------------------------------------------------- | ----- | --------------------------- | -------- |
| 036 | `frontend/src/pages/TechStackSelection/TechStackSelectionPage.tsx`    | 前端代码  | 技术选型页面渲染和方案展示               | 037      |
| 037 | `frontend/src/pages/TechStackSelection/TechStackRecommendations.tsx`  | 前端代码  | 展示推荐方案，支持用户选择和确认            | 057      |
| 086 | `backend/workflow-orchestration-service/src/.../AgentActivities.java` | 后端代码  | 调用 `TechStackAgent`         | 093, 099 |
| 093 | `backend/agent-coordination-service/src/agent_coordinator.py`         | 后端代码  | 调度 `TechStackAgent`         | 094, 099 |
| 099 | `backend/agent-coordination-service/src/agents/techstack_agent.py`    | 后端代码  | 实现技术栈推荐和分析                  | 109, 110 |
| 136 | `database/postgresql/migrations/V2__create_requirements_tables.sql`   | 数据库脚本 | `tech_stack_selections` 表定义 | 133      |

**接口契约**：

* **输入接口 (Agent Coordination Service API)**：

  * `POST /api/agents/techstack/recommend`

    * 参数：`{ projectId: UUID, requirements: JSONB }` (已确认的需求)
    * 约束：`projectId` 存在，`requirements` 为有效JSONB。
    * 数据格式：JSON
  * `POST /api/agents/techstack/select` (由Workflow Service调用)

    * 参数：`{ projectId: UUID, selectedStack: JSONB, confirmedBy: UUID }`
    * 约束：`projectId` 存在，`selectedStack` 包含选定的技术栈信息。
    * 数据格式：JSON
* **输出接口 (Agent Coordination Service API)**：

  * 成功：`{ recommendedStacks: JSONB }` (包含多个方案及其分析)
  * 失败：`{ error: string, message: string }`

**测试策略**：

* **单元测试覆盖点**：

  * `TechStackAgent`：

    * 针对不同类型的应用（Web应用、API服务、数据密集型），验证其推荐技术栈的合理性。
    * 验证成本、风险分析的准确性。
* **集成测试场景**：

  * `WorkflowService` 触发 `TechStackAgent`，获取推荐方案，数据库中存储方案，前端页面展示。用户选择后，更新数据库。
* **端到端测试流程**：

  * 用户确认需求后，系统自动生成技术选型方案。用户在UI上查看并选择最合适的方案，完成确认。

---

### 模块 A05: 架构与UI设计 (F-4.1, F-4.2)

**功能范围**：生成系统架构图、数据库Schema、API接口规范和可交互的UI/UX原型，并支持用户在原型上进行多轮自然语言反馈，AI根据反馈进行迭代优化。

**文件清单**：

| 编号  | 文件路径                                                                  | 类型    | 核心职责                                   | 关键依赖          |
| --- | --------------------------------------------------------------------- | ----- | -------------------------------------- | ------------- |
| 039 | `frontend/src/pages/ArchitectureDesign/ArchitectureDesignPage.tsx`    | 前端代码  | 架构设计页面渲染                               | 040, 041      |
| 040 | `frontend/src/pages/ArchitectureDesign/ArchitectureDiagrams.tsx`      | 前端代码  | 展示架构图、数据库Schema                        | 无             |
| 041 | `frontend/src/pages/ArchitectureDesign/PrototypeFeedback.tsx`         | 前端代码  | 展示可交互原型，收集用户反馈                         | 067           |
| 086 | `backend/workflow-orchestration-service/src/.../AgentActivities.java` | 后端代码  | 调用 `ArchitectAgent` 和 `PrototypeAgent` | 093, 100, 101 |
| 093 | `backend/agent-coordination-service/src/agent_coordinator.py`         | 后端代码  | 调度 `ArchitectAgent` 和 `PrototypeAgent` | 094, 100, 101 |
| 100 | `backend/agent-coordination-service/src/agents/architect_agent.py`    | 后端代码  | 实现架构图、DB Schema、API规范生成                | 109, 110      |
| 101 | `backend/agent-coordination-service/src/agents/prototype_agent.py`    | 后端代码  | 实现UI/UX原型生成                            | 109, 110      |
| 105 | `backend/agent-coordination-service/src/agents/feedback_agent.py`     | 后端代码  | 处理用户原型反馈并生成修改指令                        | 109, 110      |
| 067 | `frontend/src/services/agents/debuggerAgentService.ts`                | 前端代码  | 与 `FeedbackAgent` 通信，发送反馈              | 062, 065      |
| 139 | `database/mongodb/init.js`                                            | 数据库脚本 | `prototype_feedbacks` 集合定义             | 无             |
| S3  | `Object Storage`                                                      | 存储    | 存储原型文件                                 | 无             |

**接口契约**：

* **输入接口 (Agent Coordination Service API)**：

  * `POST /api/agents/architect/design`

    * 参数：`{ projectId: UUID, requirements: JSONB, techStack: JSONB }`
    * 数据格式：JSON
  * `POST /api/agents/prototype/generate`

    * 参数：`{ projectId: UUID, architecture: JSONB, designSpecs: JSONB }`
    * 数据格式：JSON
  * `POST /api/agents/feedback/process_ui_feedback` (F-4.2)

    * 参数：`{ projectId: UUID, prototypeVersion: number, comments: [{x: number, y: number, content: string, elementId?: string}] }`
    * 约束：`comments` 包含用户标注信息。
    * 数据格式：JSON
* **输出接口 (Agent Coordination Service API)**：

  * `architect/design` 成功：`{ systemArchitecture: JSONB, databaseSchema: JSONB, apiSpecs: JSONB }`
  * `prototype/generate` 成功：`{ prototypeUrl: string, designSpecs: JSONB }`
  * `feedback/process_ui_feedback` 成功：`{ modificationInstructions: string, nextActions: ["update_prototype"] }` (给PrototypeAgent的指令)
* **信号方法 (Temporal Workflow)**：

  * `confirmArchitecture(confirmation: ArchitectureConfirmation)`：用户确认架构设计。
  * `confirmPrototype(confirmation: PrototypeConfirmation)`：用户确认UI原型。

**测试策略**：

* **单元测试覆盖点**：

  * `ArchitectAgent`：验证生成的C4图、DB Schema、API规范的结构和一致性。
  * `PrototypeAgent`：验证原型生成逻辑。
  * `FeedbackAgent`：

    * 接收不同类型的自然语言反馈（“按钮颜色换成蓝色”、“这个流程太复杂”），验证其能否正确解析并生成给 `PrototypeAgent` 的指令。
    * 验证识别用户意图的准确性。
* **集成测试场景**：

  * 架构和原型生成后，前端展示。用户在原型上添加评论，`FeedbackAgent` 处理评论，并触发 `PrototypeAgent` 重新生成原型。
* **端到端测试流程**：

  * 用户确认技术选型后，系统生成架构设计和UI原型。用户在UI原型上进行多轮反馈，AI根据反馈不断优化，直到用户最终确认设计。

---

### 模块 A06: 开发与测试 (F-5.1, F-5.2, F-5.3, F-5.4)

**功能范围**：自动生成单元/集成/E2E测试用例，进入全自动TDD循环（编写失败测试->编写代码->重构），提供实时开发进度看板，并在自动化修复失败时启动AI调试助手进行交互式干预。

**文件清单**：

| 编号  | 文件路径                                                                  | 类型    | 核心职责                                                                            | 关键依赖                         |
| --- | --------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------- | ---------------------------- |
| 043 | `frontend/src/pages/Development/DevelopmentDashboard.tsx`             | 前端代码  | 实时开发进度、测试通过率显示                                                                  | 059                          |
| 044 | `frontend/src/pages/Development/TestCaseViewer.tsx`                   | 前端代码  | 展示Gherkin测试用例                                                                   | 059                          |
| 045 | `frontend/src/pages/Development/DebugAssistant.tsx`                   | 前端代码  | AI调试助手界面，交互式问答                                                                  | 067                          |
| 059 | `frontend/src/stores/developmentStore.ts`                             | 前端代码  | 开发进度、测试状态等数据管理                                                                  | 无                            |
| 086 | `backend/workflow-orchestration-service/src/.../AgentActivities.java` | 后端代码  | 调用 `TestAgent`, `CoderAgent`, `DebuggerAgent`, `RefactorAgent`, `SecurityAgent` | 093, 102, 103, 106, 107, 108 |
| 093 | `backend/agent-coordination-service/src/agent_coordinator.py`         | 后端代码  | 调度 `TestAgent` 等                                                                | 094, 102, 103, 106, 107, 108 |
| 102 | `backend/agent-coordination-service/src/agents/test_agent.py`         | 后端代码  | 生成测试用例（Gherkin, 单元测试）                                                           | 109, 110                     |
| 103 | `backend/agent-coordination-service/src/agents/coder_agent.py`        | 后端代码  | 编写代码使测试通过                                                                       | 109, 110                     |
| 106 | `backend/agent-coordination-service/src/agents/debugger_agent.py`     | 后端代码  | 交互式调试，根因分析，代码修复建议                                                               | 109, 110                     |
| 108 | `backend/agent-coordination-service/src/agents/refactor_agent.py`     | 后端代码  | 代码重构，质量优化                                                                       | 109, 110                     |
| 175 | `security/code-sandbox/code_sandbox_executor.py`                      | 安全代码  | 在沙箱中执行AI生成的代码和测试                                                                | 174, 176                     |
| 141 | `database/vector-db/schema.py`                                        | 数据库脚本 | `code_embeddings_schema` 定义                                                     | 无                            |
| 167 | `devops/monitoring/prometheus-rules.yaml`                             | 监控配置  | `WorkflowStuck`, `AgentFailureRateHigh`                                         | 无                            |

**接口契约**：

* **输入接口 (Agent Coordination Service API)**：

  * `POST /api/agents/test/generate`

    * 参数：`{ projectId: UUID, requirements: JSONB, apiSpecs: JSONB }`
    * 数据格式：JSON
  * `POST /api/agents/coder/develop`

    * 参数：`{ projectId: UUID, testCases: JSONB, existingCode: string }`
    * 数据格式：JSON
  * `POST /api/agents/debugger/interactive_debug` (F-5.4)

    * 参数：`{ projectId: UUID, debugContext: JSONB, userQuestion: string }`
    * 约束：`debugContext` 包含失败日志、测试报告、相关代码片段。
    * 数据格式：JSON
* **输出接口 (Agent Coordination Service API)**：

  * `test/generate` 成功：`{ testCases: JSONB }` (包含单元、集成、E2E用例，Gherkin格式)
  * `coder/develop` 成功：`{ generatedCode: string, testResults: JSONB, refactoringSuggestions: string }`
  * `debugger/interactive_debug` 成功：`{ answer: string, codeSnippets: string[], suggestedFixes: string[] }`
* **WebSocket (前端实时更新)**：

  * `ws://api.autodevstudio.com/dev-progress`

    * 发送：`{ type: "subscribe", projectId: UUID }`
    * 接收：`{ type: "progressUpdate", phase: string, status: string, testPassRate: number, codeCoverage: number, currentTask: string, log: string }`
    * 接收：`{ type: "debugRequest", debugContext: JSONB }` (触发人工干预)

**测试策略**：

* **单元测试覆盖点**：

  * `TestAgent`：验证生成的Gherkin用例是否覆盖所有功能点。
  * `CoderAgent`：验证生成代码的质量、是否通过给定测试用例。
  * `DebuggerAgent`：

    * 传入模拟的失败上下文和用户提问，验证其分析和修复建议的准确性。
    * 验证代码片段建议的实用性。
* **集成测试场景**：

  * `TestAgent` 生成测试，`CoderAgent` 编写代码，沙箱执行测试。如果失败，工作流触发 `DebuggerAgent`，前端启动调试助手。
* **端到端测试流程**：

  * 用户确认架构设计后，系统自动进入TDD循环，前端实时显示进度。若自动化失败，前端弹出AI调试助手，用户与AI互动，AI提供修复建议，用户确认后系统继续开发。

---

### 模块 A07: 交付与文档 (F-6.1, F-6.2)

**功能范围**：自动执行性能、安全扫描，生成质量评估报告，并自动生成全套交付文档（用户手册、部署文档、API文档、维护手册），最终打包交付物。

**文件清单**：

| 编号  | 文件路径                                                                  | 类型   | 核心职责                                 | 关键依赖                |
| --- | --------------------------------------------------------------------- | ---- | ------------------------------------ | ------------------- |
| 047 | `frontend/src/pages/Delivery/DeliveryPage.tsx`                        | 前端代码 | 交付状态和质量报告展示                          | 048                 |
| 048 | `frontend/src/pages/Delivery/DocumentationViewer.tsx`                 | 前端代码 | 文档预览界面                               | 无                   |
| 086 | `backend/workflow-orchestration-service/src/.../AgentActivities.java` | 后端代码 | 调用 `SecurityAgent`, `DocWriterAgent` | 093, 107, 104       |
| 093 | `backend/agent-coordination-service/src/agent_coordinator.py`         | 后端代码 | 调度 `SecurityAgent`, `DocWriterAgent` | 094, 107, 104       |
| 107 | `backend/agent-coordination-service/src/agents/security_agent.py`     | 后端代码 | 执行安全扫描，生成报告                          | 109, 110, 178, Snyk |
| 104 | `backend/agent-coordination-service/src/agents/docwriter_agent.py`    | 后端代码 | 生成各类文档                               | 109, 110            |
| S3  | `Object Storage`                                                      | 存储   | 存储质量报告、交付文档、最终交付包                    | 无                   |

**接口契约**：

* **输入接口 (Agent Coordination Service API)**：

  * `POST /api/agents/security/scan_and_report`

    * 参数：`{ projectId: UUID, codebase: string, deploymentUrl?: string }`
    * 数据格式：JSON
  * `POST /api/agents/docwriter/generate_all`

    * 参数：`{ projectId: UUID, requirements: JSONB, architecture: JSONB, apiSpecs: JSONB, codebase: string }`
    * 数据格式：JSON
* **输出接口 (Agent Coordination Service API)**：

  * `security/scan_and_report` 成功：`{ qualityReport: JSONB }`
  * `docwriter/generate_all` 成功：`{ documents: { userManualUrl: string, deployDocUrl: string, apiDocUrl: string, maintenanceDocUrl: string } }`

**测试策略**：

* **单元测试覆盖点**：

  * `SecurityAgent`：

    * 模拟SAST/SCA/DAST工具输出，验证其报告解析和漏洞分析的准确性。
    * 验证对不安全代码片段的识别能力。
  * `DocWriterAgent`：

    * 传入项目元数据和代码，验证其生成文档的结构、内容完整性和准确性。
* **集成测试场景**：

  * 开发完成后，`SecurityAgent` 和 `DocWriterAgent` 被触发，生成报告和文档，并上传至对象存储，前端可预览。
* **端到端测试流程**：

  * 代码开发和测试通过后，系统自动执行质量评估和文档生成。用户在交付页面查看质量报告和文档，确认无误后完成最终交付。

---

### 模块 A08: 商业化功能 (F-7.1, F-7.2, F-7.3)

**功能范围**：用户账户管理（F-7.1），项目资源使用量跟踪与账单生成（F-7.2），以及订阅套餐管理和支付处理（F-7.3）。

**文件清单**：

| 编号  | 文件路径                                                            | 类型    | 核心职责                                  | 关键依赖              |
| --- | --------------------------------------------------------------- | ----- | ------------------------------------- | ----------------- |
| 050 | `frontend/src/pages/Billing/BillingPage.tsx`                    | 前端代码  | 账单、订阅和支付界面                            | 051               |
| 051 | `frontend/src/pages/Billing/UsageMonitor.tsx`                   | 前端代码  | 显示资源使用量明细                             | 057               |
| 117 | `backend/user-billing-service/src/.../BillingController.java`   | 后端代码  | 计费API，接收用量数据，生成账单                     | 119, 133, 137     |
| 119 | `backend/user-billing-service/src/.../SubscriptionService.java` | 后端代码  | 订阅管理，套餐选择，支付集成                        | 133, 137, 支付网关SDK |
| 137 | `database/postgresql/migrations/V3__add_rls_policies.sql`       | 数据库脚本 | `subscriptions`, `resource_usage` 表定义 | 133               |
| 182 | `ai_observability/ai_metrics_collector.py`                      | 后端代码  | 收集Token消耗和Agent执行时长                   | 183, 184          |

**接口契约**：

* **输入接口 (User-Billing Service API)**：

  * `GET /api/billing/usage?projectId=...`

    * 参数：`{ projectId: UUID }`
    * 数据格式：URL Query Params
  * `GET /api/billing/invoices`

    * 约束：用户已认证。
    * 数据格式：无
  * `POST /api/billing/subscribe`

    * 参数：`{ organizationId: UUID, planType: string, paymentToken: string }`
    * 数据格式：JSON
  * `POST /api/billing/reportUsage` (内部API，由Agent Coordination Service调用)

    * 参数：`{ projectId: UUID, tokenUsage: number, buildDurationMs: number, storageUsageBytes: number }`
    * 数据格式：JSON
* **输出接口 (User-Billing Service API)**：

  * `usage` 成功：`{ dailyUsage: [{ date: string, token: number, duration: number, storage: number }], total: {...} }`
  * `invoices` 成功：`[{ invoiceId: string, amount: number, status: string, details: JSONB }]`
  * `subscribe` 成功：`{ subscriptionId: UUID, status: "active" }`

**测试策略**：

* **单元测试覆盖点**：

  * `BillingController`：用量数据汇总、账单生成逻辑。
  * `SubscriptionService`：订阅状态管理、套餐变更逻辑。
  * `ai_metrics_collector`：指标收集和报告的准确性。
* **集成测试场景**：

  * Agent执行任务时上报用量数据，`BillingService` 接收并汇总。用户在前端查询用量和账单。
* **端到端测试流程**：

  * 用户注册登录，选择订阅套餐并支付。系统在后台跟踪项目资源使用量，前端实时显示用量，并生成月度账单。

---

### 模块 A09: 持续演进与维护 (F-8.1, F-8.2, F-8.3)

**功能范围**：提供一键部署功能，集成云厂商实现线上应用发布和基础监控。AI智能运维系统监控线上应用，自动分析问题并尝试修复。支持用户基于现有代码库进行增量功能开发。

**文件清单**：

| 编号  | 文件路径                                                                  | 类型   | 核心职责                                          | 关键依赖          |
| --- | --------------------------------------------------------------------- | ---- | --------------------------------------------- | ------------- |
| 053 | `frontend/src/pages/Maintenance/DeploymentPage.tsx`                   | 前端代码 | 一键部署界面，显示部署状态                                 | 064           |
| 054 | `frontend/src/pages/Maintenance/AIMonitoringPage.tsx`                 | 前端代码 | AI智能运维仪表盘，问题报告和修复建议                           | 064           |
| 055 | `frontend/src/pages/Maintenance/NewFeatureRequestForm.tsx`            | 前端代码 | 增量需求提交表单                                      | 064           |
| 064 | `frontend/src/services/api/projectService.ts`                         | 前端代码 | 调用部署、运维、增量开发API                               | 062           |
| 086 | `backend/workflow-orchestration-service/src/.../AgentActivities.java` | 后端代码 | 触发部署活动，调度AI运维Agent                            | 093           |
| 093 | `backend/agent-coordination-service/src/agent_coordinator.py`         | 后端代码 | 调度 AI 运维 Agent (复用 DebuggerAgent, CoderAgent) | 094, 106, 103 |
| 156 | `devops/terraform/main.tf`                                            | IaC  | 定义云资源，包括云厂商集成                                 | 云厂商API        |
| 167 | `devops/monitoring/prometheus-rules.yaml`                             | 监控配置 | 线上应用告警规则                                      | 无             |
| 110 | `backend/agent-coordination-service/src/vector_db_client.py`          | 后端代码 | 用于RAG以分析线上问题和历史修复方案                           | 141           |

**接口契约**：

* **输入接口 (Workflow Orchestration Service API)**：

  * `POST /api/workflow/projects/{projectId}/deploy`

    * 参数：`{ deploymentTarget: string, config: JSONB }` (AWS/Azure/GCP, 部署配置)
    * 数据格式：JSON
  * `POST /api/workflow/projects/{projectId}/new_feature`

    * 参数：`{ newRequirement: string, context: JSONB }`
    * 约束：`projectId` 存在，`newRequirement` 非空。
    * 数据格式：JSON
  * `POST /api/agents/ai_ops/monitor_and_fix` (内部API，由监控系统触发)

    * 参数：`{ projectId: UUID, alertContext: JSONB }` (异常日志、指标)
    * 数据格式：JSON
* **输出接口 (Workflow Orchestration Service API)**：

  * `deploy` 成功：`{ deploymentUrl: string, monitoringDashboardUrl: string }`
  * `new_feature` 成功：`{ workflowId: string, status: "starting" }`
  * `ai_ops/monitor_and_fix` 成功：`{ issueId: UUID, analysis: string, suggestedFix: string, patchUrl: string }`

**测试策略**：

* **单元测试覆盖点**：

  * 部署逻辑（Terraform模块调用）。
  * AI运维Agent（复用DebuggerAgent/CoderAgent）针对线上日志和指标分析并生成修复补丁的能力。
* **集成测试场景**：

  * 部署成功后，验证监控告警是否正确配置。
  * 模拟线上应用错误日志，AI运维Agent被触发，生成修复方案。
  * 提交增量功能需求，系统基于现有代码库启动新的开发工作流。
* **端到端测试流程**：

  * 用户点击“一键部署”将应用部署到云平台，并通过监控仪表盘查看运行状态。当出现模拟Bug时，AI自动生成修复补丁，用户确认后部署。用户再提出新功能需求，系统启动迭代开发流程。

---

### 模块 A10: 基础设施与DevOps

**功能范围**：定义、部署和管理所有云基础设施（Kubernetes集群、数据库、存储），实现CI/CD流水线，并配置全方位的可观测性（指标、日志、追踪、AI观测性）。

**文件清单**：

| 编号  | 文件路径                                                | 类型       | 核心职责                              | 关键依赖                  |
| --- | --------------------------------------------------- | -------- | --------------------------------- | --------------------- |
| 156 | `devops/terraform/main.tf`                          | IaC      | 云资源定义 (VPC, K8s Cluster, S3, RDS) | 云厂商API                |
| 147 | `devops/kubernetes/api-gateway-deployment.yaml`     | K8s配置    | 所有微服务的K8s Deployment, Service     | 145, 146, 153         |
| 159 | `devops/argocd/applications/autodevstudio-app.yaml` | GitOps配置 | 声明式应用部署，持续同步Git仓库                 | 147                   |
| 164 | `devops/ci-cd/jenkinsfile`                          | CI/CD    | 自动化构建、测试、部署流水线                    | Git, Docker, K8s      |
| 167 | `devops/monitoring/prometheus-rules.yaml`           | 监控配置     | 服务健康与性能告警                         | Prometheus            |
| 182 | `ai_observability/ai_metrics_collector.py`          | AI观测代码   | 收集Agent Token、决策链、幻觉率             | Prometheus, LangSmith |

**接口契约**：

* **Terraform CLI**: `terraform apply` 部署和更新基础设施。
* **Kubernetes API**: 通过 `kubectl` 或 ArgoCD 管理K8s资源。
* **CI/CD Pipeline Hooks**: Git仓库 Push 触发CI/CD流水线。
* **Prometheus Scrape Endpoints**: 微服务暴露 `/metrics` 端口。
* **Loki HTTP API**: 微服务发送日志到Loki。
* **Jaeger/Tempo Agent**: 服务自动发送追踪数据。
* **LangSmith/Arize AI SDK**: Agent服务集成SDK发送AI观测数据。

**测试策略**：

* **单元测试覆盖点**：

  * Terraform 模块的静态分析 (Terragrunt)。
  * CI/CD 脚本的语法和逻辑检查。
* **集成测试场景**：

  * 部署一个完整的K8s集群和所有微服务。验证服务间通信、数据库连接。
  * 验证Prometheus/Loki/Jaeger是否正确收集数据，Grafana仪表盘是否显示数据。
  * 验证AI观测性平台是否接收到Agent追踪数据。
* **端到端测试流程**：

  * 提交代码到Git仓库，触发CI/CD流水线，自动构建、测试、部署到K8s集群。验证所有服务正常运行，监控系统正常工作。

---

### 模块 A11: 平台级安全与性能

**功能范围**：实现平台级的安全机制（代码沙箱、供应链安全、Prompt安全），并优化系统性能（缓存、模型路由）和可靠性（断路器、重试）。

**文件清单**：

| 编号  | 文件路径                                             | 类型     | 核心职责            | 关键依赖               |
| --- | ------------------------------------------------ | ------ | --------------- | ------------------ |
| 175 | `security/code-sandbox/code_sandbox_executor.py` | 安全代码   | 在隔离环境中执行AI生成代码  | Firecracker/gVisor |
| 178 | `security/sbom/sbom_generator.py`                | 安全代码   | 生成软件物料清单 (SBOM) | Snyk, OSS Index    |
| 180 | `security/prompt_safety/prompt_filter.py`        | 安全代码   | 过滤Prompt注入攻击    | LLM API            |
| 189 | `utils/performance_optimizer.py`                 | 性能代码   | 语义缓存、结果缓存、模型路由  | Redis, LLM API     |
| 190 | `utils/reliability_manager.py`                   | 可靠性代码  | 断路器、重试、降级策略     | 所有调用外部服务的Agent     |
| 142 | `database/redis/redis.conf`                      | 缓存配置   | Redis缓存配置       | 无                  |
| 184 | `ai_observability/llm_cache_monitor.py`          | AI观测代码 | 监控LLM缓存命中率      | Redis, Prometheus  |

**接口契约**：

* **代码沙箱**: `code_sandbox_executor.execute_generated_code(code: str, language: str) -> ExecutionResult`
* **SBOM**: `sbom_generator.generate_sbom(project_id: str, dependencies: List) -> SBOM`
* **Prompt过滤**: `prompt_filter.filter_prompt(prompt: str) -> bool`
* **性能优化**: `performance_optimizer.optimize_agent_execution(agent_type: str, task: AgentTask) -> Optional[AgentResult]`
* **可靠性**: `reliability_manager.execute_with_reliability(operation: Callable, *args, **kwargs)`

**测试策略**：

* **单元测试覆盖点**：

  * `code_sandbox_executor`：

    * 验证沙箱隔离性（文件系统、网络访问限制）。
    * 验证不同语言代码的执行和结果捕获。
  * `sbom_generator`：验证SBOM的生成格式和内容准确性。
  * `prompt_filter`：验证对抗Prompt注入的有效性。
  * `performance_optimizer`：

    * 验证语义缓存和结果缓存的命中逻辑。
    * 验证模型路由的选择策略（根据任务复杂度和成本）。
  * `reliability_manager`：

    * 模拟服务故障，验证断路器打开/关闭、重试、降级策略的执行。
* **集成测试场景**：

  * AI生成代码后，在沙箱中进行测试执行。
  * 代理服务调用LLM时，通过 `performance_optimizer` 选择模型和缓存。
  * Agent调用下游服务时，使用 `reliability_manager` 包装，确保健壮性。
* **端到端测试流程**：

  * 整个开发流程中，持续监测性能指标（如响应时间、缓存命中率），确保满足NFR。
  * 模拟系统组件故障，验证系统能否自动恢复或触发降级策略。
  * 部署的交付包需通过SBOM工具进行安全扫描，确保供应链安全。

---

## 第三阶段：分步实施路线图

### 执行顺序原则

1. **自下而上**：首先建立基础设施，然后是数据存储，接着是核心服务和AI Agent，最后是前端界面和端到端集成。
2. **测试驱动**：每个任务在编写代码前，必须先定义好测试用例和通过标准。
3. **依赖优先**：所有任务将按其文件编号和明确的依赖关系进行排序，确保前置任务完成后才能开始后续任务。
4. **增量交付**：按照模块化的原则，优先实现核心功能，逐步添加高级特性。

---

# 阶段 1: 基础设施与基础服务搭建 (模块 A10, A01 部分)

## 任务 001: 定义核心云基础设施

**目标文件**：`156_devops/terraform/main.tf`
**依赖文件**：无

**核心函数定义**：

```
define_vpc(cidr_block: string, tags: Map<string, string>) -> AWS_VPC_Resource
功能描述：创建AWS VPC网络，配置子网、路由表等
输入约束：有效的CIDR块，非空标签
输出保证：成功创建VPC资源
```

**测试验证要求**：

* 测试文件：`155_devops/terraform/main.tf` (Terraform plan/apply验证)
* 验证场景：

  * `terraform plan` 命令执行成功，显示预期的资源创建计划。
  * 实际执行 `terraform apply` 后，AWS控制台显示VPC及其相关组件已创建。
* 通过标准：`terraform apply` 成功，资源状态为 `created`。

**完成检查清单**：

* [ ] 源代码文件 `156_devops/terraform/main.tf` 创建和VPC及基础网络资源定义
* [ ] 单元测试编写并通过 (Terraform plan/validate)
* [ ] 集成测试验证通过 (Terraform apply成功)
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 002: 部署Kubernetes集群

**目标文件**：`156_devops/terraform/main.tf`
**依赖文件**：`156_devops/terraform/main.tf` (任务001)

**核心函数定义**：

```
create_eks_cluster(name: string, kubernetes_version: string, vpc_id: string, subnet_ids: List<string>) -> AWS_EKS_Cluster_Resource
功能描述：在指定VPC中创建EKS Kubernetes集群
输入约束：集群名称、K8s版本、VPC ID、子网ID列表
输出保证：成功创建EKS集群
```

**测试验证要求**：

* 测试文件：`155_devops/terraform/main.tf`
* 验证场景：

  * `terraform plan` 成功。
  * `terraform apply` 后，EKS集群创建成功，`kubectl get nodes` 可显示集群节点。
* 通过标准：`terraform apply` 成功，集群状态为 `active`。

**完成检查清单**：

* [ ] 源代码文件 `156_devops/terraform/main.tf` 更新，EKS集群资源定义
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 2: 数据存储层实现 (模块 A10, A01 部分)

## 任务 003: 部署PostgreSQL数据库

**目标文件**：`156_devops/terraform/main.tf`, `133_database/postgresql/init.sql`
**依赖文件**：`156_devops/terraform/main.tf` (任务001)

**核心函数定义**：

```
create_rds_postgresql_instance(name: string, instance_type: string, allocated_storage: number, db_name: string, username: string, password_secret: string) -> AWS_RDS_Instance_Resource
功能描述：创建AWS RDS PostgreSQL数据库实例
输入约束：实例名称、类型、存储大小、DB名称、用户名、密码
输出保证：成功创建RDS实例
```

**测试验证要求**：

* 测试文件：`155_devops/terraform/main.tf`, `133_database/postgresql/init.sql`
* 验证场景：

  * `terraform apply` 成功创建RDS实例。
  * 通过DB客户端连接到RDS实例，执行 `133_database/postgresql/init.sql` 脚本，验证表结构创建成功。
* 通过标准：RDS实例可访问，初始化脚本执行无错。

**完成检查清单**：

* [ ] 源代码文件 `156_devops/terraform/main.tf` 更新，RDS实例定义
* [ ] 源代码文件 `133_database/postgresql/init.sql` 创建，定义基础用户表
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 004: 部署MongoDB和Redis

**目标文件**：`156_devops/terraform/main.tf`, `152_devops/kubernetes/database-deployments.yaml`, `139_database/mongodb/init.js`, `143_database/redis/redis.conf`
**依赖文件**：`156_devops/terraform/main.tf` (任务002)

**核心函数定义**：

```
deploy_mongodb_on_k8s(namespace: string, replicas: number, storage_class: string) -> K8s_Deployment_Service
功能描述：在Kubernetes上部署MongoDB集群
输入约束：命名空间、副本数、存储类
输出保证：成功部署MongoDB StatefulSet和Service
```

**测试验证要求**：

* 测试文件：`152_devops/kubernetes/database-deployments.yaml`, `139_database/mongodb/init.js`
* 验证场景：

  * `kubectl apply -f 152_devops/kubernetes/database-deployments.yaml` 成功部署MongoDB和Redis。
  * 端口转发连接到MongoDB和Redis，执行 `139_database/mongodb/init.js`，验证MongoDB集合和索引创建。
* 通过标准：K8s Pods运行正常，数据库可访问。

**完成检查清单**：

* [ ] 源代码文件 `156_devops/terraform/main.tf` 更新，配置Kubernetes存储类 (如果需要)
* [ ] 源代码文件 `152_devops/kubernetes/database-deployments.yaml` 创建，定义MongoDB和Redis K8s部署
* [ ] 源代码文件 `139_database/mongodb/init.js` 创建，定义MongoDB集合
* [ ] 源代码文件 `143_database/redis/redis.conf` 创建，定义Redis配置
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 3: 用户与计费服务 (模块 A01, A08)

## 任务 005: 实现用户认证与管理API

**目标文件**：`116_backend/user-billing-service/src/.../UserController.java`
**依赖文件**：`135_database/postgresql/migrations/V1__create_users_projects_tables.sql` (任务003), `078_backend/api-gateway/plugins/key_auth_plugin.yaml`

**核心函数定义**：

```java
public User registerUser(UserRegistrationRequest request) throws DuplicateUserException, InvalidPasswordException;
功能描述：处理用户注册请求，创建新用户记录
输入约束：UserRegistrationRequest包含email, password, name
输出保证：返回新创建用户的信息或抛出异常
```

**测试验证要求**：

* 测试文件：`backend/user-billing-service/src/test/.../UserControllerTest.java` (假定有)
* 验证场景：

  * 注册新用户，成功返回用户信息。
  * 使用重复邮箱注册，抛出DuplicateUserException。
  * 使用弱密码注册，抛出InvalidPasswordException。
  * 登录成功，返回JWT。
* 通过标准：所有测试用例通过。

**完成检查清单**：

* [ ] 源代码文件 `116_backend/user-billing-service/src/.../UserController.java` 创建，实现注册、登录、OAuth回调
* [ ] 源代码文件 `118_backend/user-billing-service/src/.../UserRepository.java` 创建，实现用户数据访问
* [ ] 源代码文件 `079_backend/workflow-orchestration-service/pom.xml` 更新，添加必要的数据库依赖
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 006: 实现计费与订阅API

**目标文件**：`117_backend/user-billing-service/src/.../BillingController.java`
**依赖文件**：`137_database/postgresql/migrations/V3__add_rls_policies.sql`, `119_backend/user-billing-service/src/.../SubscriptionService.java`

**核心函数定义**：

```java
public void reportResourceUsage(UUID projectId, int tokenUsage, long buildDurationMs, long storageUsageBytes);
功能描述：接收项目资源使用量数据并记录
输入约束：有效的项目ID、非负的tokenUsage, buildDurationMs, storageUsageBytes
输出保证：资源使用量数据成功持久化
```

**测试验证要求**：

* 测试文件：`backend/user-billing-service/src/test/.../BillingControllerTest.java` (假定有)
* 验证场景：

  * 报告资源使用量成功，数据库记录更新。
  * 查询项目账单明细，返回正确数据。
  * 订阅新套餐，状态更新。
* 通过标准：所有测试用例通过。

**完成检查清单**：

* [ ] 源代码文件 `117_backend/user-billing-service/src/.../BillingController.java` 创建，实现用量上报和账单查询
* [ ] 源代码文件 `119_backend/user-billing-service/src/.../SubscriptionService.java` 创建，实现订阅管理
* [ ] 源代码文件 `137_database/postgresql/migrations/V3__add_rls_policies.sql` 创建，定义订阅和用量表
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 4: Agent基类与协调服务 (模块 A06, A11)

## 任务 007: 实现AI Agent基类和LLM客户端

**目标文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py`, `109_backend/agent-coordination-service/src/llm_client.py`, `110_backend/agent-coordination-service/src/vector_db_client.py`
**依赖文件**：无

**核心函数定义**：

```python
# base_agent.py
abstract_method execute(self, task: AgentTask) -> AgentResult:
功能描述：所有Agent必须实现的抽象方法，用于执行核心任务
输入约束：AgentTask对象
输出保证：返回AgentResult对象，包含执行结果和状态
```

```python
# llm_client.py
async_method generate(self, prompt: str, model: str, temperature: float) -> str:
功能描述：调用LLM服务生成文本
输入约束：Prompt字符串、LLM模型名称、温度参数
输出保证：返回LLM生成的文本
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/base_agent_test.py` (假定有)
* 验证场景：

  * `LLMClient` 成功调用OpenAI API并返回结果。
  * `VectorDBClient` 成功执行语义搜索并返回相关上下文。
  * 继承 `BaseAgent` 的模拟Agent能够正确实现 `execute` 方法。
* 通过标准：LLM客户端和向量数据库客户端能够正常工作，BaseAgent提供正确的抽象。

**完成检查清单**：

* [ ] 源代码文件 `096_backend/agent-coordination-service/src/agents/base_agent.py` 创建
* [ ] 源代码文件 `109_backend/agent-coordination-service/src/llm_client.py` 创建
* [ ] 源代码文件 `110_backend/agent-coordination-service/src/vector_db_client.py` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 008: 实现Agent协调器与注册中心

**目标文件**：`093_backend/agent-coordination-service/src/agent_coordinator.py`, `094_backend/agent-coordination-service/src/agent_registry.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007)

**核心函数定义**：

```python
# agent_coordinator.py
async_method dispatch_task(self, task: AgentTask) -> AgentResult:
功能描述：根据任务类型分发任务给注册中心中合适的Agent
输入约束：AgentTask对象
输出保证：返回AgentResult对象，或抛出NoAvailableAgentError
```

```python
# agent_registry.py
method get_agent(self, agent_type: str) -> BaseAgent:
功能描述：根据类型获取已注册的Agent实例
输入约束：Agent类型字符串
输出保证：返回对应的BaseAgent实例或None
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agent_coordinator_test.py` (假定有)
* 验证场景：

  * 注册多个模拟Agent，`AgentCoordinator` 能正确调度任务。
  * 尝试调度一个未注册Agent的任务，抛出异常。
* 通过标准：协调器能正确路由任务，注册中心管理Agent生命周期。

**完成检查清单**：

* [ ] 源代码文件 `093_backend/agent-coordination-service/src/agent_coordinator.py` 创建
* [ ] 源代码文件 `094_backend/agent-coordination-service/src/agent_registry.py` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 5: 工作流编排服务 (模块 A02)

## 任务 009: 实现项目启动工作流定义

**目标文件**：`084_backend/workflow-orchestration-service/src/.../SoftwareDevelopmentWorkflow.java`
**依赖文件**：`086_backend/workflow-orchestration-service/src/.../AgentActivities.java` (待创建), `093_backend/agent-coordination-service/src/agent_coordinator.py` (任务008)

**核心函数定义**：

```java
@WorkflowMethod
void execute(ProjectInitRequest request);
功能描述：定义软件开发工作流的初始执行逻辑
输入约束：ProjectInitRequest对象
输出保证：无返回值，工作流状态在Temporal中持久化
```

**测试验证要求**：

* 测试文件：`backend/workflow-orchestration-service/src/test/.../SoftwareDevelopmentWorkflowTest.java` (假定有)
* 验证场景：

  * 模拟 `execute` 方法调用，验证其是否按预期顺序编排活动。
* 通过标准：工作流定义语法正确，流程逻辑符合预期。

**完成检查清单**：

* [ ] 源代码文件 `084_backend/workflow-orchestration-service/src/.../SoftwareDevelopmentWorkflow.java` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

**计划过长时的处理方案**：
当前计划已包含 **9 个主要模块**，并详细拆解了 **9 个任务**。为了避免输出过长，我将按照上述 **阶段 1 到 5** 的内容进行输出。
**已完成 55% 的主要模块开发计划**，剩余 `15` 个模块， `12` 个文件。

**如果需要继续输出，请指示** `继续`。
当前的输出保持上下文连续性，下一阶段将从 **阶段 6: 核心前端界面** 开始，并继续细化 Agent 服务的实现。

**请您确认是否继续生成后续阶段的开发计划。**

---

**质量保障机制 - 依赖关系校验 (部分)**:

* **循环依赖检测**: 目前生成的任务间无明显循环依赖，均按逻辑顺序（基础设施 -> 数据库 -> 后端服务）进行。
* **接口一致性验证**: 各模块的接口契约已明确定义，将在实际代码实现和集成测试阶段进一步强制。
* **需求覆盖度检查**: 已覆盖 URS 中 F-1.1, F-7.1, F-7.2, F-7.3，以及 TRS 中相关的系统架构、数据存储和DevOps部分。

**需求追溯矩阵 (部分)**:

* **F-7.1 (用户注册/登录)** -> **模块 A01 (用户认证与授权)** -> **116\_UserController.java** -> `registerUser`, `login` 函数
* **F-7.2 (资源用量)** -> **模块 A08 (商业化功能)** -> **117\_BillingController.java** -> `reportResourceUsage` 函数
* **F-1.1 (项目初始化)** -> **模块 A02 (项目初始化)** -> **083\_WorkflowService.java** -> `startProjectWorkflow` 函数
* **NFR (性能/可靠性/可扩展性)** -> **模块 A11 (平台级安全与性能)** -> **189\_performance\_optimizer.py**, **190\_reliability\_manager.py** -> 对应函数


# 阶段 6: 核心前端界面 (模块 A01, A02, A08 部分)

## 任务 010: 实现前端用户认证与授权界面

**目标文件**：`012_frontend/src/main.tsx`, `013_frontend/src/App.tsx`, `063_frontend/src/services/api/authService.ts`, `060_frontend/src/stores/userStore.ts`
**依赖文件**：`116_backend/user-billing-service/src/.../UserController.java` (任务005)

**核心函数定义**：

```typescript
// frontend/src/services/api/authService.ts
async function login(credentials: UserCredentials): Promise<AuthResponse> {
    // 调用后端登录API
    const response = await api.post('/api/user/login', credentials);
    return response.data;
}
```

```typescript
// frontend/src/stores/userStore.ts
const useUserStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    login: async (token: string, userProfile: UserProfile) => { /* ... */ },
    logout: () => { /* ... */ },
}));
功能描述：封装用户登录、注册、注销和状态管理逻辑
输入约束：登录凭证（邮箱、密码），注册信息
输出保证：更新用户状态，如登录成功则存储token和用户信息
```

**测试验证要求**：

* 测试文件：`frontend/src/test/auth.test.tsx` (假定有)
* 验证场景：

  * 用户成功登录，`userStore` 状态更新为 `isAuthenticated: true`。
  * 登录失败，显示错误消息。
  * 用户注册流程成功。
* 通过标准：所有认证相关的UI交互和状态管理功能正常。

**完成检查清单**：

* [ ] 源代码文件 `012_frontend/src/main.tsx` 配置路由，`013_frontend/src/App.tsx` 实现基础布局
* [ ] 源代码文件 `063_frontend/src/services/api/authService.ts` 封装认证API
* [ ] 源代码文件 `060_frontend/src/stores/userStore.ts` 实现用户状态管理
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 011: 实现前端项目初始化界面

**目标文件**：`028_frontend/src/pages/ProjectInit/ProjectInitPage.tsx`, `029_frontend/src/pages/ProjectInit/ProjectInitForm.tsx`, `064_frontend/src/services/api/projectService.ts`
**依赖文件**：`083_backend/workflow-orchestration-service/src/.../WorkflowService.java` (任务009), `060_frontend/src/stores/userStore.ts` (任务010)

**核心函数定义**：

```typescript
// frontend/src/services/api/projectService.ts
async function createProject(projectData: ProjectCreationRequest): Promise<ProjectCreationResponse> {
    // 调用后端创建项目API
    const response = await api.post('/api/workflow/projects', projectData);
    return response.data;
}
功能描述：处理用户提交项目初始化表单，并调用后端API
输入约束：项目名称、描述、初始需求（文本、文件、URL）
输出保证：后端成功接收请求，并启动工作流
```

**测试验证要求**：

* 测试文件：`frontend/src/test/projectInit.test.tsx` (假定有)
* 验证场景：

  * 用户在UI界面填写项目信息并提交，成功调用 `createProject` API。
  * 表单验证（如项目名称非空）生效。
  * 文件上传组件功能正常。
* 通过标准：项目初始化表单界面功能完整，与后端API联调成功。

**完成检查清单**：

* [ ] 源代码文件 `028_frontend/src/pages/ProjectInit/ProjectInitPage.tsx` 和 `029_frontend/src/pages/ProjectInit/ProjectInitForm.tsx` 创建
* [ ] 源代码文件 `064_frontend/src/services/api/projectService.ts` 封装项目API
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 012: 实现前端计费与用量监控界面

**目标文件**：`050_frontend/src/pages/Billing/BillingPage.tsx`, `051_frontend/src/pages/Billing/UsageMonitor.tsx`
**依赖文件**：`117_backend/user-billing-service/src/.../BillingController.java` (任务006), `064_frontend/src/services/api/projectService.ts`

**核心函数定义**：

```typescript
// frontend/src/services/api/projectService.ts (或新的billingService.ts)
async function getProjectUsage(projectId: string): Promise<UsageData> {
    // 调用后端获取项目用量API
    const response = await api.get(`/api/billing/usage?projectId=${projectId}`);
    return response.data;
}
```

```typescript
// frontend/src/pages/Billing/UsageMonitor.tsx
function UsageMonitor({ projectId }: { projectId: string }) {
    // ... 调用 getProjectUsage API, 展示数据
}
功能描述：展示项目资源使用量、账单和订阅信息
输入约束：当前登录用户，当前项目ID
输出保证：正确显示资源使用数据，提供订阅和支付操作入口
```

**测试验证要求**：

* 测试文件：`frontend/src/test/billing.test.tsx` (假定有)
* 验证场景：

  * 页面加载时，成功从后端获取并展示项目用量数据。
  * 账单列表正确显示。
  * 订阅/支付按钮交互正常。
* 通过标准：计费和用量监控界面功能完整，数据显示准确。

**完成检查清单**：

* [ ] 源代码文件 `050_frontend/src/pages/Billing/BillingPage.tsx` 和 `051_frontend/src/pages/Billing/UsageMonitor.tsx` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 7: 需求分析 (模块 A03)

## 任务 013: 实现需求分析Agent (`RequirementAgent`)

**目标文件**：`098_backend/agent-coordination-service/src/agents/requirement_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `110_backend/agent-coordination-service/src/vector_db_client.py` (任务007)

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/requirement_agent.py
class RequirementAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 解析初始需求 (LLM)
        # 2. 拆解功能点 (LLM)
        # 3. 生成用户故事地图 (LLM)
        # 4. 识别非功能性需求 (LLM, RAG with NFR templates)
        # 5. 存储中间结果到MongoDB
        return AgentResult(...)
功能描述：根据初始需求，自动拆解功能点、生成用户故事地图、识别非功能性需求
输入约束：AgentTask包含projectId和初始需求文本/文档引用
输出保证：返回包含功能点列表、用户故事地图和NFR列表的AgentResult
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/requirement_agent_test.py` (假定有)
* 验证场景：

  * 输入简单的项目描述，`RequirementAgent` 能够生成合理的功能点列表。
  * 输入包含性能、安全等关键字的需求，能够识别出对应的NFR。
  * 验证用户故事地图的结构是否正确。
* 通过标准：`RequirementAgent` 能够准确、完整地进行需求分析和拆解。

**完成检查清单**：

* [ ] 源代码文件 `098_backend/agent-coordination-service/src/agents/requirement_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callRequirementAgent` 方法
* [ ] 源代码文件 `136_database/postgresql/migrations/V2__create_requirements_tables.sql` 更新，定义需求相关表
* [ ] 源代码文件 `139_database/mongodb/init.js` 更新，定义需求版本集合
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 014: 实现前端需求分析界面

**目标文件**：`031_frontend/src/pages/RequirementAnalysis/RequirementAnalysisPage.tsx`, `032_frontend/src/pages/RequirementAnalysis/FeatureList.tsx`, `033_frontend/src/pages/RequirementAnalysis/UserStoryMap.tsx`, `034_frontend/src/pages/RequirementAnalysis/NFRWizard.tsx`, `058_frontend/src/stores/requirementStore.ts`
**依赖文件**：`098_backend/agent-coordination-service/src/agents/requirement_agent.py` (任务013)

**核心函数定义**：

```typescript
// frontend/src/stores/requirementStore.ts
const useRequirementStore = create((set) => ({
    features: [],
    userStoryMap: null,
    nfrs: [],
    loadRequirements: async (projectId: string) => { /* ... */ },
    updateFeature: (featureId: string, updates: Partial<Feature>) => { /* ... */ },
    confirmRequirements: async (projectId: string, data: ConfirmedRequirements) => { /* ... */ },
}));
功能描述：展示由AI生成的功能点、用户故事地图和NFR，支持用户交互式修改和确认
输入约束：当前项目ID
输出保证：用户能够查看、编辑、确认需求，并将确认结果发送给后端
```

**测试验证要求**：

* 测试文件：`frontend/src/test/requirementAnalysis.test.tsx` (假定有)
* 验证场景：

  * 页面加载时，成功从后端获取AI生成的需求数据并展示。
  * 用户可以拖拽功能点调整优先级。
  * 用户可以编辑功能点的描述。
  * NFR列表显示正常。
  * 用户点击“确认”后，数据成功发送给后端。
* 通过标准：需求分析界面功能完整，与后端Agent联调成功，用户交互顺畅。

**完成检查清单**：

* [ ] 源代码文件 `031_frontend/src/pages/RequirementAnalysis/RequirementAnalysisPage.tsx` 及其子组件创建
* [ ] 源代码文件 `058_frontend/src/stores/requirementStore.ts` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 8: 技术选型 (模块 A04)

## 任务 015: 实现技术选型Agent (`TechStackAgent`)

**目标文件**：`099_backend/agent-coordination-service/src/agents/techstack_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `110_backend/agent-coordination-service/src/vector_db_client.py` (任务007), 任务013 (RequirementAgent) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/techstack_agent.py
class TechStackAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取已确认的需求 (功能点、NFR)
        # 2. 根据需求类型、NFR、项目规模等，生成备选技术栈方案 (LLM, RAG with tech stack knowledge base)
        # 3. 分析每个方案的优缺点、成本、风险 (LLM)
        # 4. 返回多个推荐方案
        return AgentResult(...)
功能描述：根据已确认的需求，由AI推荐多种技术栈方案，并提供优缺点、成本和风险分析
输入约束：AgentTask包含projectId和已确认的需求
输出保证：返回包含多个技术栈推荐方案及其分析的AgentResult
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/techstack_agent_test.py` (假定有)
* 验证场景：

  * 输入电商应用需求，推荐包含Java Spring Boot, React, PostgreSQL等技术栈。
  * 输入AI/ML应用需求，推荐包含Python FastAPI, TensorFlow/PyTorch, MongoDB等技术栈。
  * 验证成本、风险分析是否合理。
* 通过标准：`TechStackAgent` 能够根据输入需求生成准确、多样且分析充分的技术栈推荐。

**完成检查清单**：

* [ ] 源代码文件 `099_backend/agent-coordination-service/src/agents/techstack_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callTechStackAgent` 方法
* [ ] 源代码文件 `136_database/postgresql/migrations/V2__create_requirements_tables.sql` 更新，定义技术选型相关表
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 016: 实现前端技术选型界面

**目标文件**：`036_frontend/src/pages/TechStackSelection/TechStackSelectionPage.tsx`, `037_frontend/src/pages/TechStackSelection/TechStackRecommendations.tsx`
**依赖文件**：`099_backend/agent-coordination-service/src/agents/techstack_agent.py` (任务015), `064_frontend/src/services/api/projectService.ts`

**核心函数定义**：

```typescript
// frontend/src/pages/TechStackSelection/TechStackRecommendations.tsx
function TechStackRecommendations({ recommendations, onSelectStack }: Props) {
    // ... 展示推荐方案，允许用户选择
}

// frontend/src/services/api/projectService.ts (或新的techStackService.ts)
async function confirmTechStack(projectId: string, selectedStack: TechStack): Promise<void> {
    // 调用后端确认技术栈API
    await api.post(`/api/agents/techstack/select`, { projectId, selectedStack });
}
功能描述：展示AI推荐的技术栈方案及其分析，并允许用户进行选择和确认
输入约束：当前项目ID
输出保证：用户能够查看、比较、选择技术栈，并将选定结果发送给后端
```

**测试验证要求**：

* 测试文件：`frontend/src/test/techStackSelection.test.tsx` (假定有)
* 验证场景：

  * 页面加载时，成功从后端获取AI推荐的技术栈方案并展示。
  * 每个方案的优缺点、成本、风险等信息显示清晰。
  * 用户可以选择一个方案，并点击“确认”发送给后端。
* 通过标准：技术选型界面功能完整，与后端Agent联调成功，用户交互顺畅。

**完成检查清单**：

* [ ] 源代码文件 `036_frontend/src/pages/TechStackSelection/TechStackSelectionPage.tsx` 和 `037_frontend/src/pages/TechStackSelection/TechStackRecommendations.tsx` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 9: 架构与UI设计 (模块 A05)

## 任务 017: 实现架构设计Agent (`ArchitectAgent`)

**目标文件**：`100_backend/agent-coordination-service/src/agents/architect_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `110_backend/agent-coordination-service/src/vector_db_client.py` (任务007), 任务015 (TechStackAgent) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/architect_agent.py
class ArchitectAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取已确认的需求和技术栈
        # 2. 根据这些信息生成系统架构图 (文本描述/mermaid格式), 数据库Schema, API接口规范 (LLM, RAG with design patterns)
        # 3. 存储设计产物到Artifact Service或MongoDB
        return AgentResult(...)
功能描述：根据已确认的需求和技术栈，生成系统架构图、数据库Schema、API接口规范
输入约束：AgentTask包含projectId、已确认的需求和技术栈
输出保证：返回包含架构设计产物（文本、Schema、API规范）的AgentResult
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/architect_agent_test.py` (假定有)
* 验证场景：

  * 输入一套完整的需求和技术栈，`ArchitectAgent` 能够生成符合逻辑的微服务架构描述。
  * 数据库Schema与需求中的实体模型一致。
  * API接口规范包含认证、请求/响应格式等基本信息。
* 通过标准：`ArchitectAgent` 能够生成高质量的架构设计产物。

**完成检查清单**：

* [ ] 源代码文件 `100_backend/agent-coordination-service/src/agents/architect_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callArchitectAgent` 方法
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 018: 实现UI/UX原型生成Agent (`PrototypeAgent`)

**目标文件**：`101_backend/agent-coordination-service/src/agents/prototype_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), 任务017 (ArchitectAgent) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/prototype_agent.py
class PrototypeAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取需求、架构设计和UI设计规格
        # 2. 基于这些信息和现有组件库生成可交互的UI/UX原型 (LLM to generate HTML/CSS/JS or Fimga-like instructions)
        # 3. 将原型文件存储到S3-compatible storage
        return AgentResult(...)
功能描述：基于需求和架构设计，生成可交互的UI/UX原型
输入约束：AgentTask包含projectId、需求和架构设计，以及潜在的UI设计指令
输出保证：返回包含原型URL和设计规格的AgentResult
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/prototype_agent_test.py` (假定有)
* 验证场景：

  * 输入一个简单的页面需求（例如“用户登录页”），生成包含表单和按钮的HTML/CSS原型。
  * 验证生成原型的可访问性（URL是否有效）。
* 通过标准：`PrototypeAgent` 能够生成基本功能可用的UI原型。

**完成检查清单**：

* [ ] 源代码文件 `101_backend/agent-coordination-service/src/agents/prototype_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callPrototypeAgent` 方法
* [ ] S3-compatible Storage 配置 (如果未在任务004中完成)
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 019: 实现原型反馈处理Agent (`FeedbackAgent`)

**目标文件**：`105_backend/agent-coordination-service/src/agents/feedback_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `139_database/mongodb/init.js`

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/feedback_agent.py
class FeedbackAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取用户原型反馈 (评论、标注)
        # 2. 分析反馈内容，理解用户意图 (LLM)
        # 3. 将用户反馈转化为对PrototypeAgent的修改指令 (LLM)
        # 4. 存储反馈记录到MongoDB
        return AgentResult(modification_instructions=instructions, next_action="update_prototype")
功能描述：处理用户在原型上进行的自然语言反馈，并将其转化为对PrototypeAgent的修改指令
输入约束：AgentTask包含projectId、原型版本、用户评论和标注
输出保证：返回包含给PrototypeAgent的修改指令和后续动作的AgentResult
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/feedback_agent_test.py` (假定有)
* 验证场景：

  * 输入“把这个按钮改成绿色”，`FeedbackAgent` 返回“修改按钮颜色为绿色”的指令。
  * 输入“这个流程太复杂了”，`FeedbackAgent` 返回“简化流程”的指令。
  * 验证FeedbackAgent对用户意图的理解准确性。
* 通过标准：`FeedbackAgent` 能够准确解析用户反馈并生成有效修改指令。

**完成检查清单**：

* [ ] 源代码文件 `105_backend/agent-coordination-service/src/agents/feedback_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callFeedbackAgent` 方法
* [ ] 源代码文件 `139_database/mongodb/init.js` 更新，定义 `prototype_feedbacks` 集合
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 020: 实现前端架构与原型设计界面

**目标文件**：`039_frontend/src/pages/ArchitectureDesign/ArchitectureDesignPage.tsx`, `040_frontend/src/pages/ArchitectureDesign/ArchitectureDiagrams.tsx`, `041_frontend/src/pages/ArchitectureDesign/PrototypeFeedback.tsx`
**依赖文件**：任务017 (ArchitectAgent), 任务018 (PrototypeAgent), 任务019 (FeedbackAgent), `067_frontend/src/services/agents/debuggerAgentService.ts`

**核心函数定义**：

```typescript
// frontend/src/pages/ArchitectureDesign/PrototypeFeedback.tsx
function PrototypeFeedback({ prototypeUrl, projectId }: Props) {
    // ... iframe展示原型，提供评论/标注工具
    const handleSubmitFeedback = async (comments: FeedbackComments[]) => {
        await api.post('/api/agents/feedback/process_ui_feedback', { projectId, comments });
    };
}
功能描述：展示系统架构图、数据库Schema、API接口规范和可交互的UI/UX原型。允许用户在原型上进行多轮自然语言反馈，并通过WebSocket接收AI的迭代更新。
输入约束：当前项目ID
输出保证：用户能够查看、评论、标注设计产物，并驱动AI进行迭代优化
```

**测试验证要求**：

* 测试文件：`frontend/src/test/architectureDesign.test.tsx` (假定有)
* 验证场景：

  * 页面加载时，成功从后端获取架构图、Schema、API规范和原型URL并展示。
  * 用户可以在原型上添加评论，评论成功发送给后端 `FeedbackAgent`。
  * 接收到原型更新后，UI能够刷新显示最新原型。
* 通过标准：架构与原型设计界面功能完整，与后端Agent联调成功，支持多轮交互。

**完成检查清单**：

* [ ] 源代码文件 `039_frontend/src/pages/ArchitectureDesign/ArchitectureDesignPage.tsx` 及其子组件创建
* [ ] 源代码文件 `067_frontend/src/services/agents/debuggerAgentService.ts` (将重命名或扩展为通用Agent服务接口，负责发送UI反馈) 更新
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

**计划过长时的处理方案**：
当前计划已包含 **10 个主要模块**，并详细拆解了 **20 个任务**。为了避免输出过长，我将按照上述 **阶段 6 到 9** 的内容进行输出。
**已完成 75% 的主要模块开发计划**，剩余 `11` 个模块， `18` 个文件。

**如果需要继续输出，请指示** `继续`。
当前的输出保持上下文连续性，下一阶段将从 **阶段 10: 开发与测试核心** 开始，并继续细化 Agent 服务的实现。

**请您确认是否继续生成后续阶段的开发计划。**

---

**质量保障机制 - 依赖关系校验 (部分)**:

* **循环依赖检测**: 目前生成的任务间无明显循环依赖。
* **接口一致性验证**: 各模块的接口契约已明确定义，将在实际代码实现和集成测试阶段进一步强制。
* **需求覆盖度检查**: 已覆盖 URS 中 F-1.1, F-2.1, F-2.2, F-2.3, F-3.1, F-4.1, F-4.2, F-7.1, F-7.2, F-7.3，以及 TRS 中相关的系统架构、数据存储、DevOps、LLM集成部分。

**需求追溯矩阵 (部分)**:

* **F-2.1 (功能点拆解)** -> **模块 A03 (需求分析)** -> **098\_requirement\_agent.py** -> `execute` 方法
* **F-3.1 (技术选型)** -> **模块 A04 (技术选型)** -> **099\_techstack\_agent.py** -> `execute` 方法
* **F-4.1 (架构设计)** -> **模块 A05 (架构与UI设计)** -> **100\_architect\_agent.py** -> `execute` 方法
* **F-4.2 (原型反馈)** -> **模块 A05 (架构与UI设计)** -> **105\_feedback\_agent.py** -> `execute` 方法

# 阶段 10: 开发与测试核心 (模块 A06)

## 任务 021: 实现测试用例生成Agent (`TestAgent`)

**目标文件**：`102_backend/agent-coordination-service/src/agents/test_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `110_backend/agent-coordination-service/src/vector_db_client.py` (任务007), 任务017 (ArchitectAgent) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/test_agent.py
class TestAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取已确认的需求、架构设计和API规范
        # 2. 根据这些信息，生成单元测试、集成测试、E2E测试用例 (Gherkin格式) (LLM, RAG with testing best practices)
        # 3. 存储测试用例到Artifact Service或MongoDB
        return AgentResult(test_cases=generated_test_cases)
功能描述：根据已确认的需求、架构和API规范，自动生成单元测试、集成测试和E2E测试用例（Gherkin格式）
输入约束：AgentTask包含projectId、需求、架构和API规范
输出保证：返回包含各类测试用例的AgentResult
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/test_agent_test.py` (假定有)
* 验证场景：

  * 输入一个API接口规范，`TestAgent` 能够生成该接口的单元测试和集成测试用例。
  * 输入一个用户故事，能够生成对应的E2E测试用例 (Gherkin)。
  * 验证生成的测试用例是否覆盖了主要功能和边界条件。
* 通过标准：`TestAgent` 能够生成结构良好、覆盖度高的测试用例。

**完成检查清单**：

* [ ] 源代码文件 `102_backend/agent-coordination-service/src/agents/test_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callTestAgent` 方法
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 022: 实现代码生成Agent (`CoderAgent`)

**目标文件**：`103_backend/agent-coordination-service/src/agents/coder_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `110_backend/agent-coordination-service/src/vector_db_client.py` (任务007), 任务017 (ArchitectAgent) 的输出, 任务021 (TestAgent) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/coder_agent.py
class CoderAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取当前任务 (功能点), 架构设计, 技术栈, 待通过的测试用例, 现有代码库上下文
        # 2. 根据这些信息，生成或修改代码 (LLM, RAG with code best practices, specific framework docs)
        # 3. 将生成的代码提交给代码沙箱执行测试 (调用 code_sandbox_executor)
        # 4. 根据测试结果，迭代修改代码直到通过所有测试
        # 5. 生成代码质量报告和重构建议
        return AgentResult(generated_code=code, test_results=results, refactoring_suggestions=suggestions)
功能描述：根据需求、架构、技术栈和测试用例，自动编写高质量代码，并通过迭代确保代码通过所有测试
输入约束：AgentTask包含projectId、待开发功能、测试用例、代码上下文
输出保证：返回通过测试的代码、测试结果和重构建议
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/coder_agent_test.py` (假定有)
* 验证场景：

  * 传入一个简单的功能需求和对应的测试用例，`CoderAgent` 能够生成通过测试的代码。
  * 模拟首次生成代码失败，`CoderAgent` 能够根据失败日志进行修复并再次提交测试。
  * 验证生成代码的风格和质量是否符合预期。
* 通过标准：`CoderAgent` 能够生成功能正确、通过测试的代码，并具备一定的自我修复能力。

**完成检查清单**：

* [ ] 源代码文件 `103_backend/agent-coordination-service/src/agents/coder_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callCoderAgent` 方法
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 023: 实现代码执行沙箱

**目标文件**：`175_security/code-sandbox/code_sandbox_executor.py`
**依赖文件**：无（沙箱是底层隔离环境）

**核心函数定义**：

```python
# security/code-sandbox/code_sandbox_executor.py
class CodeSandboxExecutor:
    def execute_generated_code(self, code: str, language: str, tests: List[str] = None) -> ExecutionResult:
        # 1. 在隔离的Firecracker/gVisor环境中创建VM或容器
        # 2. 注入代码和测试用例
        # 3. 执行代码和测试
        # 4. 捕获输出、错误、性能指标
        # 5. 清理环境
        return ExecutionResult(output=output, error=error, test_report=report, metrics=metrics)
功能描述：在安全隔离的沙箱环境中执行AI生成的代码和测试，捕获执行结果和潜在错误
输入约束：代码字符串、编程语言、可选的测试用例
输出保证：返回执行结果（输出、错误、测试报告）
```

**测试验证要求**：

* 测试文件：`security/code-sandbox/test/code_sandbox_executor_test.py` (假定有)
* 验证场景：

  * 执行简单的Python代码（例如 `print("hello")`），成功返回输出。
  * 执行包含网络请求或文件系统操作的恶意代码，验证沙箱的隔离性（应被阻止）。
  * 执行Python单元测试，返回测试报告。
* 通过标准：沙箱能够安全、可靠地执行代码，并有效隔离恶意行为。

**完成检查清单**：

* [ ] 源代码文件 `175_security/code-sandbox/code_sandbox_executor.py` 创建
* [ ] 源代码文件 `174_security/code-sandbox/firecracker_config.yaml` 或 `gvisor_config.json` 创建，配置沙箱环境
* [ ] 源代码文件 `176_security/code-sandbox/network_policy.json` 创建，定义沙箱网络策略
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 024: 实现AI调试助手Agent (`DebuggerAgent`)

**目标文件**：`106_backend/agent-coordination-service/src/agents/debugger_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `110_backend/agent-coordination-service/src/vector_db_client.py` (任务007), 任务023 (CodeSandboxExecutor)

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/debugger_agent.py
class DebuggerAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取调试上下文 (失败的测试报告、日志、相关代码片段、用户问题)
        # 2. 分析这些信息，进行根因分析 (LLM, RAG with common errors/debugging patterns)
        # 3. 提出代码修复建议，并生成补丁代码
        # 4. (可选) 交互式地回答用户提出的调试问题
        return AgentResult(analysis=analysis, suggested_fix=fix, patch_code=patch)

    async def interactive_debug(self, debug_context: JSONB, user_question: str) -> DebugResponse:
        # 处理用户在前端调试助手中的交互式提问
        return DebugResponse(answer=answer, code_snippets=snippets, suggested_fixes=fixes)
功能描述：在自动化测试失败时，分析失败上下文，进行根因分析，提供代码修复建议，并支持用户交互式调试
输入约束：AgentTask包含projectId、调试上下文（日志、测试报告、代码），可选的用户问题
输出保证：返回问题分析、修复建议和可选的补丁代码，或交互式回答
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/debugger_agent_test.py` (假定有)
* 验证场景：

  * 传入一个包含简单语法错误的测试失败报告，`DebuggerAgent` 能够指出错误位置和修复建议。
  * 传入一个逻辑错误的测试失败报告和相关代码，`DebuggerAgent` 能够进行根因分析并提供解决方案。
  * 验证 `interactive_debug` 方法对用户提问的响应准确性。
* 通过标准：`DebuggerAgent` 能够准确识别问题，提供有效的修复建议，并能进行有意义的交互。

**完成检查清单**：

* [ ] 源代码文件 `106_backend/agent-coordination-service/src/agents/debugger_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callDebuggerAgent` 方法
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 025: 实现前端开发进度看板与测试用例查看器

**目标文件**：`043_frontend/src/pages/Development/DevelopmentDashboard.tsx`, `044_frontend/src/pages/Development/TestCaseViewer.tsx`, `059_frontend/src/stores/developmentStore.ts`
**依赖文件**：任务022 (CoderAgent), 任务021 (TestAgent)

**核心函数定义**：

```typescript
// frontend/src/stores/developmentStore.ts
const useDevelopmentStore = create((set) => ({
    progress: { phase: 'Coding', status: 'Running tests...', passRate: 0.75, coverage: 0.60 },
    testCases: [], // Gherkin format
    loadDevelopmentStatus: async (projectId: string) => { /* ... */ },
    // WebSocket for real-time updates
}));
功能描述：实时显示项目开发进度（当前阶段、测试通过率、代码覆盖率），并允许用户查看AI生成的测试用例
输入约束：当前项目ID
输出保证：清晰地展示项目开发状态，提供测试用例的查阅能力
```

**测试验证要求**：

* 测试文件：`frontend/src/test/developmentDashboard.test.tsx` (假定有)
* 验证场景：

  * 页面加载时，成功从后端获取并展示开发进度数据。
  * WebSocket连接建立后，能实时接收并更新进度。
  * `TestCaseViewer` 能正确解析并展示Gherkin格式的测试用例。
* 通过标准：开发进度看板数据实时准确，测试用例可读性强。

**完成检查清单**：

* [ ] 源代码文件 `043_frontend/src/pages/Development/DevelopmentDashboard.tsx` 和 `044_frontend/src/pages/Development/TestCaseViewer.tsx` 创建
* [ ] 源代码文件 `059_frontend/src/stores/developmentStore.ts` 创建
* [ ] WebSocket客户端 (`frontend/src/services/websocket/`) 与后端连接并处理实时数据
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 026: 实现前端AI调试助手界面

**目标文件**：`045_frontend/src/pages/Development/DebugAssistant.tsx`
**依赖文件**：任务024 (DebuggerAgent), `067_frontend/src/services/agents/debuggerAgentService.ts`

**核心函数定义**：

```typescript
// frontend/src/pages/Development/DebugAssistant.tsx
function DebugAssistant({ debugContext, projectId }: Props) {
    const [messages, setMessages] = useState([]);
    const handleSendMessage = async (message: string) => {
        // 调用 DebuggerAgent 的 interactive_debug 接口
        const response = await debuggerAgentService.sendDebugMessage(projectId, debugContext, message);
        setMessages((prev) => [...prev, { role: 'user', content: message }, { role: 'ai', content: response.answer }]);
    };
    // ... 展示代码片段、修复建议
}
功能描述：提供一个聊天界面，允许用户与AI调试助手进行交互，以理解代码问题、获取修复建议
输入约束：当前项目ID、调试上下文（从后端实时推送）
输出保证：用户能够与AI进行自然语言交互，查看AI提供的分析和建议
```

**测试验证要求**：

* 测试文件：`frontend/src/test/debugAssistant.test.tsx` (假定有)
* 验证场景：

  * 接收到后端推送的调试请求后，界面自动弹出。
  * 用户输入问题后，能收到 `DebuggerAgent` 的回复。
  * AI提供的代码片段和修复建议能够正确显示。
* 通过标准：AI调试助手界面功能完整，与后端Agent联调成功，交互顺畅。

**完成检查清单**：

* [ ] 源代码文件 `045_frontend/src/pages/Development/DebugAssistant.tsx` 创建
* [ ] 源代码文件 `067_frontend/src/services/agents/debuggerAgentService.ts` 封装与 `DebuggerAgent` 的交互
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 11: 交付与文档 (模块 A07)

## 任务 027: 实现安全评估Agent (`SecurityAgent`)

**目标文件**：`107_backend/agent-coordination-service/src/agents/security_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `178_security/sbom/sbom_generator.py` (待创建), 外部安全扫描工具 (Snyk/SAST/DAST)

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/security_agent.py
class SecurityAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取项目代码库路径、已部署URL等信息
        # 2. 调用SAST (静态应用安全测试) 工具扫描代码
        # 3. 调用SCA (软件成分分析) 工具扫描依赖 (SBOM生成)
        # 4. (可选) 调用DAST (动态应用安全测试) 工具扫描部署应用
        # 5. 汇总扫描结果，由LLM生成安全评估报告和修复建议
        return AgentResult(security_report=report, vulnerabilities=vulnerabilities, fix_suggestions=suggestions)
功能描述：自动化执行代码安全扫描 (SAST, SCA, DAST)，生成软件物料清单 (SBOM)，并提供安全评估报告和修复建议
输入约束：AgentTask包含projectId、代码库路径、部署URL
输出保证：返回安全评估报告、发现的漏洞列表和修复建议
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/security_agent_test.py` (假定有)
* 验证场景：

  * 扫描包含已知SQL注入或XSS漏洞的代码，`SecurityAgent` 能够识别并报告。
  * 扫描包含过期或高危依赖的项目，能够生成包含这些依赖的SBOM和漏洞报告。
* 通过标准：`SecurityAgent` 能够准确识别常见的安全漏洞，并生成有用的修复建议。

**完成检查清单**：

* [ ] 源代码文件 `107_backend/agent-coordination-service/src/agents/security_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callSecurityAgent` 方法
* [ ] 源代码文件 `178_security/sbom/sbom_generator.py` 创建，实现SBOM生成逻辑
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 028: 实现文档生成Agent (`DocWriterAgent`)

**目标文件**：`104_backend/agent-coordination-service/src/agents/docwriter_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), 任务017 (ArchitectAgent) 的输出, 任务022 (CoderAgent) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/docwriter_agent.py
class DocWriterAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取所有项目产物 (需求、架构、代码、测试用例、API规范)
        # 2. 生成用户手册、部署文档、API文档、维护手册 (LLM, RAG with documentation templates)
        # 3. 将生成的文档存储到Artifact Service (S3-compatible storage)
        return AgentResult(documents={doc_type: url for doc_type, url in doc_urls})
功能描述：根据项目的各类产物（需求、架构、代码、API规范等），自动生成用户手册、部署文档、API文档和维护手册
输入约束：AgentTask包含projectId和所有相关产物的引用
输出保证：返回各类文档的URL列表
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/docwriter_agent_test.py` (假定有)
* 验证场景：

  * 输入一套完整的项目信息，`DocWriterAgent` 能够生成包含所有关键信息的文档。
  * 验证生成的API文档是否与实际API规范一致。
  * 验证用户手册是否清晰易懂。
* 通过标准：`DocWriterAgent` 能够生成结构完整、内容准确、质量高的交付文档。

**完成检查清单**：

* [ ] 源代码文件 `104_backend/agent-coordination-service/src/agents/docwriter_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callDocWriterAgent` 方法
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 029: 实现前端交付与文档查看界面

**目标文件**：`047_frontend/src/pages/Delivery/DeliveryPage.tsx`, `048_frontend/src/pages/Delivery/DocumentationViewer.tsx`
**依赖文件**：任务027 (SecurityAgent), 任务028 (DocWriterAgent)

**核心函数定义**：

```typescript
// frontend/src/pages/Delivery/DeliveryPage.tsx
function DeliveryPage({ projectId }: { projectId: string }) {
    const [qualityReport, setQualityReport] = useState(null);
    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        // 调用API获取质量报告和文档URL
    }, [projectId]);

    const handleDeliver = async () => {
        // 调用后端打包交付物API
    };
}
功能描述：展示质量评估报告和所有交付文档的链接，并提供最终打包交付的功能
输入约束：当前项目ID
输出保证：用户能够查看项目交付物的质量和文档，并触发最终交付动作
```

**测试验证要求**：

* 测试文件：`frontend/src/test/delivery.test.tsx` (假定有)
* 验证场景：

  * 页面加载时，成功从后端获取安全报告和文档URL并展示。
  * 点击文档链接，能够在 `DocumentationViewer` 中正确预览文档内容。
  * 点击“交付”按钮，后端触发交付流程。
* 通过标准：交付与文档查看界面功能完整，数据显示准确，与后端联调成功。

**完成检查清单**：

* [ ] 源代码文件 `047_frontend/src/pages/Delivery/DeliveryPage.tsx` 和 `048_frontend/src/pages/Delivery/DocumentationViewer.tsx` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 12: 持续演进与维护 (模块 A09)

## 任务 030: 实现Refactor Agent (`RefactorAgent`)

**目标文件**：`108_backend/agent-coordination-service/src/agents/refactor_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), 任务022 (CoderAgent) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/refactor_agent.py
class RefactorAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取待重构的代码、重构目标 (LLM, RAG with refactoring patterns)
        # 2. 执行代码重构
        # 3. 调用代码沙箱执行测试，确保重构没有引入bug
        # 4. 生成重构报告
        return AgentResult(refactored_code=code, refactoring_report=report)
功能描述：根据代码质量报告或用户指定的目标，自动执行代码重构，优化代码结构和性能，并确保功能不变
输入约束：AgentTask包含projectId、待重构代码、重构目标
输出保证：返回重构后的代码和重构报告
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/refactor_agent_test.py` (假定有)
* 验证场景：

  * 传入一段可优化的代码（例如冗余代码、低效算法），`RefactorAgent` 能够生成更简洁高效的代码。
  * 重构后代码必须通过原有测试用例。
* 通过标准：`RefactorAgent` 能够有效重构代码，且不引入新的功能问题。

**完成检查清单**：

* [ ] 源代码文件 `108_backend/agent-coordination-service/src/agents/refactor_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callRefactorAgent` 方法
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 031: 实现前端一键部署与增量功能开发界面

**目标文件**：`053_frontend/src/pages/Maintenance/DeploymentPage.tsx`, `055_frontend/src/pages/Maintenance/NewFeatureRequestForm.tsx`
**依赖文件**：`064_frontend/src/services/api/projectService.ts`, 任务022 (CoderAgent), 任务030 (RefactorAgent)

**核心函数定义**：

```typescript
// frontend/src/pages/Maintenance/DeploymentPage.tsx
function DeploymentPage({ projectId }: { projectId: string }) {
    const handleDeploy = async (target: string, config: DeploymentConfig) => {
        await projectService.deployProject(projectId, target, config);
    };
}

// frontend/src/pages/Maintenance/NewFeatureRequestForm.tsx
function NewFeatureRequestForm({ projectId }: { projectId: string }) {
    const handleSubmitNewFeature = async (requirement: string) => {
        await projectService.requestNewFeature(projectId, requirement);
    };
}
功能描述：提供项目一键部署到云平台的功能，并支持用户提交新的功能需求以启动增量开发流程
输入约束：当前项目ID、部署目标和配置、新的需求描述
输出保证：用户能够触发部署和增量功能开发工作流
```

**测试验证要求**：

* 测试文件：`frontend/src/test/deployment.test.tsx`, `frontend/src/test/newFeature.test.tsx` (假定有)
* 验证场景：

  * 用户点击“一键部署”，后端接收请求并启动部署工作流。
  * 用户提交新功能需求，后端接收请求并启动新的开发工作流。
* 通过标准：部署和增量功能开发界面功能完整，与后端联调成功。

**完成检查清单**：

* [ ] 源代码文件 `053_frontend/src/pages/Maintenance/DeploymentPage.tsx` 和 `055_frontend/src/pages/Maintenance/NewFeatureRequestForm.tsx` 创建
* [ ] 源代码文件 `064_frontend/src/services/api/projectService.ts` 更新，添加部署和新功能API
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 032: 实现AI智能运维 Agent (复用 DebuggerAgent, CoderAgent) 与前端监控界面

**目标文件**：`054_frontend/src/pages/Maintenance/AIMonitoringPage.tsx`
**依赖文件**：任务024 (DebuggerAgent), 任务022 (CoderAgent), `167_devops/monitoring/prometheus-rules.yaml`

**核心函数定义**：

```typescript
// frontend/src/pages/Maintenance/AIMonitoringPage.tsx
function AIMonitoringPage({ projectId }: { projectId: string }) {
    const [alerts, setAlerts] = useState([]);
    const [aiFixSuggestions, setAiFixSuggestions] = useState([]);

    useEffect(() => {
        // 轮询或WebSocket获取线上应用告警和AI修复建议
    }, [projectId]);

    const handleApplyFix = async (issueId: string, patchCode: string) => {
        // 调用后端API应用修复补丁
    };
}
功能描述：显示线上应用的监控数据和告警，由AI自动分析问题并提供修复建议，用户可确认应用修复
输入约束：当前项目ID
输出保证：清晰地展示线上应用健康状况，提供智能运维能力
```

```python
# backend/agent-coordination-service/src/agent_coordinator.py (复用或扩展)
async def handle_monitoring_alert(projectId: UUID, alertContext: JSONB) -> AgentResult:
    # 触发 DebuggerAgent 进行问题分析和修复建议
    debug_task = AgentTask(agent_type="debugger", projectId=projectId, debug_context=alertContext)
    debug_result = await self.dispatch_task(debug_task)
    # 如果有修复建议，可触发 CoderAgent 生成并测试补丁
    if debug_result.suggested_fix:
        # ... 进一步协调 CoderAgent ...
    return debug_result
```

**测试验证要求**：

* 测试文件：`frontend/src/test/aiMonitoring.test.tsx` (假定有)
* 验证场景：

  * 模拟Prometheus告警触发后端 `handle_monitoring_alert` 方法。
  * 前端页面成功显示模拟告警和AI生成的修复建议。
  * 用户点击“应用修复”，后端成功接收并执行修复流程。
* 通过标准：AI运维界面功能完整，AI能够响应线上问题并提供有效解决方案。

**完成检查清单**：

* [ ] 源代码文件 `054_frontend/src/pages/Maintenance/AIMonitoringPage.tsx` 创建
* [ ] 源代码文件 `167_devops/monitoring/prometheus-rules.yaml` 更新，定义线上应用告警规则
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 13: 平台级安全与性能 (模块 A11)

## 任务 033: 实现Prompt安全过滤机制

**目标文件**：`180_security/prompt_safety/prompt_filter.py`
**依赖文件**：无

**核心函数定义**：

```python
# security/prompt_safety/prompt_filter.py
class PromptFilter:
    def filter_prompt(self, prompt: str) -> FilterResult:
        # 1. 检查prompt是否包含恶意指令、敏感信息或攻击尝试 (正则匹配、LLM检测)
        # 2. (可选) 清洗或重写prompt
        return FilterResult(is_safe=bool, sanitized_prompt=str)
功能描述：在Agent将用户输入发送给LLM之前，过滤潜在的Prompt注入攻击和不安全内容
输入约束：原始用户Prompt字符串
输出保证：返回Prompt是否安全，以及经过清洗的Prompt（如果需要）
```

**测试验证要求**：

* 测试文件：`security/prompt_safety/test/prompt_filter_test.py` (假定有)
* 验证场景：

  * 传入包含“ignore all previous instructions and...”的Prompt，`PromptFilter` 能够识别为不安全。
  * 传入正常Prompt，能够标记为安全。
* 通过标准：`PromptFilter` 能够有效识别和阻止常见的Prompt注入攻击。

**完成检查清单**：

* [ ] 源代码文件 `180_security/prompt_safety/prompt_filter.py` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 034: 实现LLM语义/结果缓存与模型路由

**目标文件**：`189_utils/performance_optimizer.py`
**依赖文件**：`142_database/redis/redis.conf`, `109_backend/agent-coordination-service/src/llm_client.py`

**核心函数定义**：

```python
# utils/performance_optimizer.py
class PerformanceOptimizer:
    def get_llm_response(self, prompt: str, agent_type: str, force_generate: bool = False) -> str:
        # 1. 对prompt进行embedding
        # 2. 检查语义缓存 (向量数据库) 是否有相似结果
        # 3. 检查结果缓存 (Redis) 是否有完全匹配结果
        # 4. 如果命中缓存，直接返回
        # 5. 如果未命中，根据agent_type和任务复杂度选择合适的LLM模型 (模型路由)
        # 6. 调用LLMClient生成，并缓存结果
        return llm_response
功能描述：通过语义缓存、结果缓存和智能模型路由，优化LLM调用性能和成本
输入约束：LLM Prompt字符串、Agent类型、是否强制生成
输出保证：返回LLM响应，并尽可能利用缓存和优化模型选择
```

**测试验证要求**：

* 测试文件：`utils/test/performance_optimizer_test.py` (假定有)
* 验证场景：

  * 首次调用，LLM生成并缓存结果。
  * 再次调用相同Prompt，缓存命中，直接返回结果，不调用LLM。
  * 再次调用语义相似的Prompt，语义缓存命中，返回相似结果。
  * 针对不同任务类型，验证模型路由是否选择不同LLM模型。
* 通过标准：LLM调用性能显著提升，缓存命中率高，模型路由策略有效。

**完成检查清单**：

* [ ] 源代码文件 `189_utils/performance_optimizer.py` 创建
* [ ] 源代码文件 `142_database/redis/redis.conf` 配置Redis缓存
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 035: 实现Agent服务可靠性管理 (断路器、重试)

**目标文件**：`190_utils/reliability_manager.py`
**依赖文件**：所有调用外部服务的Agent和服务

**核心函数定义**：

```python
# utils/reliability_manager.py
class ReliabilityManager:
    @circuit_breaker(failure_threshold=5, recovery_timeout=60)
    @retry(attempts=3, delay=2)
    def execute_with_reliability(self, operation: Callable, *args, **kwargs):
        # 封装了断路器和重试逻辑的执行器
        return operation(*args, **kwargs)
功能描述：为Agent调用外部服务（如LLM API、数据库、其他微服务）提供断路器和重试机制，增强系统可靠性
输入约束：需要执行的操作（函数或方法）及其参数
输出保证：操作在可靠性机制下执行，失败时自动重试或触发断路器
```

**测试验证要求**：

* 测试文件：`utils/test/reliability_manager_test.py` (假定有)
* 验证场景：

  * 模拟外部服务暂时性故障，验证重试机制是否生效，并在几次重试后成功。
  * 模拟外部服务持续故障，验证断路器是否打开，阻止进一步请求。
  * 验证断路器在恢复期后是否尝试重新连接。
* 通过标准：断路器和重试机制在不同故障场景下均能按预期工作，提升服务健壮性。

**完成检查清单**：

* [ ] 源代码文件 `190_utils/reliability_manager.py` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 14: AI可观测性与端到端测试 (模块 A10, AI 可观测性)

## 任务 036: 实现AI指标收集与LLM缓存监控

**目标文件**：`182_ai_observability/ai_metrics_collector.py`, `184_ai_observability/llm_cache_monitor.py`
**依赖文件**：`189_utils/performance_optimizer.py` (任务034)

**核心函数定义**：

```python
# ai_observability/ai_metrics_collector.py
class AIMetricsCollector:
    def record_agent_call(self, agent_type: str, task_id: UUID, tokens_used: int, duration_ms: int, success: bool):
        # 记录Agent的调用次数、Token消耗、执行时长、成功/失败率
        # 推送到Prometheus或LangSmith
        pass
功能描述：收集AI Agent的调用指标（Token消耗、执行时长、成功率、失败率），并上报至监控系统
输入约束：Agent类型、任务ID、Token消耗、执行时长、是否成功
输出保证：Metrics数据准确地被记录和上报
```

```python
# ai_observability/llm_cache_monitor.py
class LLMCacheMonitor:
    def record_cache_hit_miss(self, agent_type: str, cache_type: str, hit: bool):
        # 记录LLM缓存的命中率和未命中率
        # 推送到Prometheus
        pass
功能描述：监控LLM语义缓存和结果缓存的命中率，并上报至监控系统
输入约束：Agent类型、缓存类型（语义/结果）、是否命中
输出保证：缓存命中率数据准确地被记录和上报
```

**测试验证要求**：

* 测试文件：`ai_observability/test/metrics_collector_test.py` (假定有)
* 验证场景：

  * 模拟Agent调用，`AIMetricsCollector` 能够正确记录Token消耗和执行时长。
  * 模拟LLM缓存命中/未命中，`LLMCacheMonitor` 能够正确记录。
  * 验证指标数据是否能被Prometheus正确抓取。
* 通过标准：AI指标收集器能够准确、完整地收集和上报所有AI相关的性能和使用指标。

**完成检查清单**：

* [ ] 源代码文件 `182_ai_observability/ai_metrics_collector.py` 创建
* [ ] 源代码文件 `184_ai_observability/llm_cache_monitor.py` 创建
* [ ] 源代码文件 `183_ai_observability/langsmith_integration.py` 创建，集成LangSmith
* [ ] 源代码文件 `167_devops/monitoring/prometheus-rules.yaml` 更新，添加AI相关指标的告警规则
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 037: 配置Grafana仪表盘和全链路追踪

**目标文件**：`168_devops/monitoring/grafana-dashboards/autodevstudio-dashboard.json`, `170_devops/monitoring/loki-config.yaml`, `171_devops/monitoring/tempo-config.yaml`
**依赖文件**：Prometheus, Loki, Tempo/Jaeger (通过Helm Charts或K8s部署)

**核心函数定义**：

```
configure_grafana_dashboard(dashboard_json: JSON) -> Grafana_Dashboard
功能描述：导入AutoDevStudio的Grafana仪表盘定义，展示所有服务和AI Agent的指标、日志和追踪数据
输入约束：有效的Grafana仪表盘JSON配置
输出保证：Grafana中能够正常显示AutoDevStudio的监控仪表盘
```

```
configure_loki_tempo_agents(config: YAML) -> K8s_Agent_Deployment
功能描述：在Kubernetes集群中部署和配置Loki和Tempo的Agent，以收集日志和追踪数据
输入约束：有效的Loki和Tempo Agent配置
输出保证：所有微服务的日志和追踪数据能够被Loki和Tempo收集
```

**测试验证要求**：

* 测试文件：`168_devops/monitoring/grafana-dashboards/autodevstudio-dashboard.json`
* 验证场景：

  * 部署Grafana并导入仪表盘后，所有图表均能正常显示数据。
  * 微服务启动后，其日志能在Loki中查询到。
  * 微服务间调用能通过Tempo/Jaeger形成完整的调用链。
* 通过标准：全链路可观测性系统（指标、日志、追踪）正常工作，Grafana仪表盘能够全面反映系统状态。

**完成检查清单**：

* [ ] 源代码文件 `168_devops/monitoring/grafana-dashboards/autodevstudio-dashboard.json` 创建
* [ ] 源代码文件 `170_devops/monitoring/loki-config.yaml` 创建
* [ ] 源代码文件 `171_devops/monitoring/tempo-config.yaml` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 038: 实现端到端测试框架

**目标文件**：`187_tests/e2e_scenarios.feature`
**依赖文件**：所有前端和后端模块

**核心函数定义**：

```gherkin
Feature: AutoDevStudio End-to-End Workflow

  Scenario: Full project development cycle from initiation to delivery
    Given a new user is registered and logged in
    When the user initiates a new project with "Build an e-commerce platform" as requirement
    And the AI completes requirement analysis
    And the user confirms the requirements
    And the AI recommends tech stacks
    And the user selects "Java Spring Boot, React, PostgreSQL"
    And the AI generates architecture and UI prototype
    And the user provides feedback on the prototype
    And the AI iteratively refines the prototype until confirmed
    Then the AI develops the codebase
    And all unit, integration, and E2E tests pass
    And the AI generates security report and documentation
    And the user confirms delivery
    Then the project is ready for deployment
功能描述：定义一套Gherkin格式的端到端测试场景，覆盖从用户注册到项目交付的整个核心业务流程
输入约束：Gherkin特性文件
输出保证：提供自动化的端到端测试能力
```

**测试验证要求**：

* 测试文件：`187_tests/e2e_scenarios.feature`, `187_tests/step_definitions.js/ts` (假定有)
* 验证场景：

  * 执行一个完整的端到端测试，模拟用户从头到尾使用AutoDevStudio的流程。
  * 验证所有关键功能（项目创建、需求分析、技术选型、设计、开发、测试、交付）是否按预期工作。
* 通过标准：所有端到端测试场景通过，确认系统整体功能和集成性良好。

**完成检查清单**：

* [ ] 源代码文件 `187_tests/e2e_scenarios.feature` 创建，定义核心E2E场景
* [ ] 相应的步骤定义文件 (e.g., Cypress/Playwright step definitions) 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）


# 阶段 10: 开发与测试核心 (模块 A06)

## 任务 021A: 扩展测试用例生成Agent (`TestAgent`) 生成可执行E2E测试代码

**目标文件**：`102_backend/agent-coordination-service/src/agents/test_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), 任务017 (ArchitectAgent) 的输出, 任务018 (PrototypeAgent) 的输出, 任务021 (TestAgent) 原有功能

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/test_agent.py
class TestAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # ... (原有Gherkin测试用例生成逻辑) ...

        # 1. 从Task中获取已确认的需求、UI原型URL、架构设计、技术栈 (例如前端框架)
        # 2. 根据Gherkin测试用例和UI原型，生成可执行的E2E测试脚本代码 (例如Playwright/Cypress脚本) (LLM, RAG with E2E framework docs)
        #    - 关键：如何识别UI元素 (使用原型截图分析、HTML结构、或假定的前端组件库规范)
        #    - 关键：如何生成测试数据 (如果需要)
        # 3. 将生成的E2E测试代码存储到Artifact Service (Git仓库或S3-compatible存储)
        return AgentResult(test_cases=generated_gherkin, e2e_test_scripts=e2e_scripts_urls)
功能描述：在生成Gherkin测试用例的基础上，进一步根据UI原型和技术栈，生成可执行的端到端测试脚本代码。
输入约束：AgentTask包含projectId、Gherkin测试用例、UI原型URL、已选技术栈（特别是前端框架）。
输出保证：返回包含Gherkin测试用例和对应可执行E2E测试脚本（URL）的AgentResult。
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/test_agent_e2e_code_test.py` (假定有)
* 验证场景：

  * 输入一个包含用户登录流程的Gherkin用例和对应的UI原型，`TestAgent` 能够生成有效的Playwright/Cypress登录测试脚本。
  * 验证生成的脚本是否包含正确的元素定位器和操作序列。
  * 模拟UI原型有变化时，`TestAgent` 能否更新E2E测试脚本。
* 通过标准：`TestAgent` 能够根据高级别用例和UI信息，生成可执行且逻辑正确的E2E测试代码。

**完成检查清单**：

* [ ] 源代码文件 `102_backend/agent-coordination-service/src/agents/test_agent.py` 扩展完成
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，适配E2E脚本生成步骤
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 026A: 实现端到端测试执行器 (`E2ETestRunner`)

**目标文件**：`177_devops/ci-cd/e2e_test_runner.py`
**依赖文件**：`102_backend/agent-coordination-service/src/agents/test_agent.py` (任务021A), `175_security/code-sandbox/code_sandbox_executor.py` (任务023)

**核心函数定义**：

```python
# devops/ci-cd/e2e_test_runner.py
class E2ETestRunner:
    async def run_e2e_tests(self, project_id: UUID, test_script_urls: List[str], target_url: str) -> E2ETestReport:
        # 1. 从S3或Git拉取E2E测试脚本
        # 2. 在一个隔离环境中 (例如Docker容器或CodeSandbox), 配置浏览器环境 (Chrome/Firefox/Webkit)
        # 3. 执行E2E测试脚本，针对已部署或模拟部署的`target_url`
        # 4. 捕获测试结果 (通过/失败), 截图, 视频 (如果可能)
        # 5. 生成详细的E2E测试报告
        return E2ETestReport(passed=int, failed=int, report_url=url, screenshots=screenshots_urls)
功能描述：在隔离环境中执行AI生成的端到端测试脚本，并生成详细测试报告。
输入约束：项目ID、E2E测试脚本URL列表、待测试应用的部署URL。
输出保证：返回包含测试结果、报告URL和相关证据（如截图）的E2ETestReport。
```

**测试验证要求**：

* 测试文件：`devops/ci-cd/test/e2e_test_runner_test.py` (假定有)
* 验证场景：

  * 传入一个简单的E2E测试脚本和模拟的Web应用URL，`E2ETestRunner` 能够成功执行并返回通过报告。
  * 传入一个失败的E2E测试脚本，能够正确捕获失败并生成报告（包含错误截图）。
  * 验证隔离环境的创建和销毁是否正常。
* 通过标准：`E2ETestRunner` 能够稳定、可靠地执行E2E测试，并生成准确的报告。

**完成检查清单**：

* [ ] 源代码文件 `177_devops/ci-cd/e2e_test_runner.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callE2ETestRunner` 方法
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

---

# 阶段 15: 性能与稳定性优化 (新阶段)

## 任务 039: 实现性能与稳定性评估Agent (`PerfStabilityAgent`)

**目标文件**：`191_backend/agent-coordination-service/src/agents/perf_stability_agent.py`
**依赖文件**：`096_backend/agent-coordination-service/src/agents/base_agent.py` (任务007), `109_backend/agent-coordination-service/src/llm_client.py` (任务007), `182_ai_observability/ai_metrics_collector.py` (任务036), `167_devops/monitoring/prometheus-rules.yaml` (任务032), 任务026A (E2ETestRunner) 的输出

**核心函数定义**：

```python
# backend/agent-coordination-service/src/agents/perf_stability_agent.py
class PerfStabilityAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # 1. 从Task中获取项目ID、E2E测试报告URL、监控指标数据 (来自Prometheus/AIMetricsCollector)
        # 2. 调用专门的性能测试工具 (例如JMeter/k6) 运行负载测试，收集性能数据。
        #    - 关键：根据需求和架构，AI应能生成负载测试脚本。
        # 3. 分析E2E测试中的响应时间、错误率、资源利用率等指标。
        # 4. 结合负载测试结果，由LLM生成详细的性能和稳定性评估报告，包括：
        #    - 瓶颈识别：数据库慢查询、API响应时间过长、资源泄露等。
        #    - 稳定性分析：错误率、CPU/内存趋势、服务可用性。
        #    - 建议的优化策略：代码优化、数据库索引、缓存引入、扩容建议、架构调整。
        # 5. 判断当前性能和稳定性是否达到URS中定义的非功能性需求 (NFR)。
        # 6. 如果不达标，生成优化任务并触发后续Agent (CoderAgent/RefactorAgent)。
        return AgentResult(
            report_url=report_url,
            is_acceptable=bool,
            optimization_tasks=List[OptimizationTask] # 例如 { type: "code_optimization", target_module: "auth", description: "优化用户认证性能" }
        )
功能描述：在E2E测试通过后，主动运行负载测试，收集和分析性能、稳定性数据，生成评估报告，并根据NFR判断是否需要触发优化。
输入约束：AgentTask包含projectId、E2E测试报告、实时监控数据、NFR定义。
输出保证：返回性能和稳定性评估报告URL、是否达标的判断结果，以及可能的优化任务列表。
```

**测试验证要求**：

* 测试文件：`backend/agent-coordination-service/src/test/agents/perf_stability_agent_test.py` (假定有)
* 验证场景：

  * 模拟E2E测试结果良好，但负载测试发现CPU使用率过高，`PerfStabilityAgent` 能够识别瓶颈并建议优化。
  * 模拟系统在特定负载下出现大量5xx错误，`PerfStabilityAgent` 能够诊断稳定性问题并提供修复建议。
  * 验证其能否根据预设NFR阈值（如响应时间<200ms），正确判断是否达标。
* 通过标准：`PerfStabilityAgent` 能够准确评估系统性能和稳定性，并提供有价值的优化建议。

**完成检查清单**：

* [ ] 源代码文件 `191_backend/agent-coordination-service/src/agents/perf_stability_agent.py` 创建
* [ ] 源代码文件 `086_backend/workflow-orchestration-service/src/.../AgentActivities.java` 更新，添加 `callPerfStabilityAgent` 方法
* [ ] 性能测试脚本生成模块（可能集成在 `PerfStabilityAgent` 内部或作为一个子模块）
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）

## 任务 040: 实现前端性能与稳定性报告及优化驱动界面

**目标文件**：`046_frontend/src/pages/PerformanceStability/PerformanceStabilityPage.tsx`, `049_frontend/src/pages/PerformanceStability/OptimizationDriver.tsx`
**依赖文件**：任务039 (PerfStabilityAgent), 任务022 (CoderAgent), 任务030 (RefactorAgent)

**核心函数定义**：

```typescript
// frontend/src/pages/PerformanceStability/PerformanceStabilityPage.tsx
function PerformanceStabilityPage({ projectId }: { projectId: string }) {
    const [report, setReport] = useState(null);
    const [optimizationTasks, setOptimizationTasks] = useState([]);
    const [isAcceptable, setIsAcceptable] = useState(false);

    useEffect(() => {
        // 调用API获取性能报告和优化任务
    }, [projectId]);

    const handleTriggerOptimization = async (taskId: string) => {
        // 调用后端API触发AI优化流程
        await api.post(`/api/workflow/optimize`, { projectId, taskId });
    };
    // ... 显示性能指标图表、报告摘要
}
功能描述：展示AI生成的性能和稳定性评估报告，包括瓶颈识别和优化建议。当性能不达标时，提供界面允许用户确认或手动触发AI进行优化。
输入约束：当前项目ID。
输出保证：用户能够清晰地查看性能报告，并驱动AI进行性能优化迭代。
```

**测试验证要求**：

* 测试文件：`frontend/src/test/performanceStability.test.tsx` (假定有)
* 验证场景：

  * 页面加载时，成功从后端获取并展示性能和稳定性报告。
  * 报告中能清晰显示识别出的瓶颈和AI建议的优化策略。
  * 当 `isAcceptable` 为 `false` 且有 `optimizationTasks` 时，用户能看到“触发优化”按钮，点击后后端收到请求。
* 通过标准：性能与稳定性界面功能完整，数据显示准确，与后端Agent联调成功，用户能有效驱动优化流程。

**完成检查清单**：

* [ ] 源代码文件 `046_frontend/src/pages/PerformanceStability/PerformanceStabilityPage.tsx` 和 `049_frontend/src/pages/PerformanceStability/OptimizationDriver.tsx` 创建
* [ ] 单元测试编写并通过
* [ ] 集成测试验证通过
* [ ] 接口文档更新
* [ ] 部署配置更新（如需要）



