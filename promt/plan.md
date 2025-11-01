# AutoDevStudio 项目开发计划生成指令

# 角色与任务
你是一个资深软件架构师，负责为 AutoDevStudio 项目制定完整的机器可执行开发计划。基于提供的输入信息，输出一份详细的开发蓝图，确保 Google Jules 能够准确解析并分步执行。

# 输入信息

## **1. 用户需求规格说明书 (URS) - AutoDevStudio**

**1.1 项目概述**
AutoDevStudio是一个AI驱动的软件自动化开发平台，旨在为客户提供从自然语言需求到可部署软件产品的端到端解决方案。平台通过协同工作的AI Agent矩阵，遵循测试驱动开发（TDD）等软件工程最佳实践，实现高质量、高效率的软件交付。

**1.2 核心用户价值**
*   **极速交付**: 将传统数周或数月的开发周期缩短至数小时或数天。
*   **质量保障**: 内置TDD和自动化QA流程，确保交付产物的健壮性和可靠性。
*   **成本效益**: 通过自动化降低人力成本，提供透明、可预测的开发费用。
*   **用户主导**: 在所有关键决策节点（需求、架构、UI等）赋予用户最终确认权，确保产出符合预期。
*   **持续演进**: 不仅是单次交付，平台支持对已上线产品的迭代开发、Bug修复和功能扩展，成为项目的长期技术伙伴。
*   **知识沉淀**: 项目过程中产生的所有设计、决策和代码都将成为项目专属的知识库，为后续的维护和升级提供精准的上下文，降低长期拥有成本（TCO）。

**1.3 用户与角色**
*   **项目所有者 (Client)**: 提出需求、在关键节点进行确认、管理项目预算和最终验收的个人或企业代表。
*   **技术协作者 (Technical Collaborator)**: (可选角色) 客户方的技术人员，拥有对代码仓库、技术文档和部分调试工具的只读或读写权限。他们可以审查AI生成的代码、提出具体的技术修改建议，或在需要时介入解决复杂问题。
*   **平台管理员 (Admin)**: 负责平台运维、用户管理、计费系统监控和支持服务的内部人员。

**1.4 功能需求 (Functional Requirements)**

| 模块 | 功能ID | 功能描述 | 用户确认点 | 产出物 |
| :--- | :--- | :--- | :--- | :--- |
| **1. 项目初始化** | F-1.1 | 用户通过引导式界面创建新项目，输入项目名称和初始需求描述（支持文本、文档上传）。<br>**支持多样化输入源**：除了文本和文档，还支持输入竞品URL、市场分析报告链接、Figma/Sketch设计稿链接，让AI能从更丰富的上下文中理解需求。 | - | 项目空间 |
| **2. 需求分析** | F-2.1 | 系统自动将用户输入的需求拆解为详细的功能点清单（Feature List）。 | | |
| | F-2.2 | 系统生成用户故事地图（User Story Map），并基于商业价值和实现难度对功能进行优先级排序。<br>**交互式需求确认**：用户不仅可以确认，还可以在界面上直接拖拽调整优先级、编辑/添加/删除功能点和用户故事。所有修改将触发AI重新评估依赖关系和工作量。 | **功能清单与优先级确认 (可交互编辑)** | 结构化的需求文档 (v1.0) |
| | F-2.3 | 系统自动识别并列出非功能性需求（如性能、安全、合规等）。<br>**引导式NFR定义**：系统通过提问式交互（例如：“您的应用需要支持多少并发用户？”“数据需要遵循GDPR合规吗？”）来帮助用户明确非功能性需求，并允许用户自定义添加。 | **非功能性需求确认** | |
| **3. 技术选型** | F-3.1 | 系统基于需求分析结果，推荐2-3个技术栈方案，并提供详细的优缺点、成本和风险分析。 | **技术栈方案确认** | 确定的技术栈配置 |
| **4. 架构与设计** | F-4.1 | 系统生成系统架构图（如C4模型的Context和Container图）、数据库Schema设计和API接口规范初稿。 | **架构设计确认** | 系统架构设计文档 |
| | F-4.2 | 系统生成可交互的UI/UX原型，并提供主要页面的交互流程图。<br>**基于反馈的迭代式原型优化**：用户可以在原型上进行评论和标注（例如“这个按钮颜色换成蓝色”），AI Feedback Agent会理解这些自然语言反馈，并生成新版本的原型供再次确认。 | **UI/UX原型确认 (支持多轮反馈)** | 可交互原型链接、设计规范 |
| **5. 开发与测试** | F-5.1 | 系统基于确认的需求和设计，自动生成单元、集成、端到端（E2E）的测试用例。<br>**用户友好的测试用例展示**：对于非技术用户，测试用例以Gherkin语言（Given-When-Then）等易于理解的格式呈现。 | **测试用例确认 (可选)** | 测试用例集 |
| | F-5.2 | 系统进入全自动TDD循环：编写失败的测试 -> 编写代码使测试通过 -> 重构。 | - | 通过测试的代码 |
| | F-5.3 | 用户可以在仪表盘上实时查看开发进度、测试通过率和代码生成状态。 | - | 实时进度看板 |
| | F-5.4 | 若自动化修复失败超过阈值（3次），系统将暂停并生成人工干预请求，提供详细的上下文和失败日志。<br>**AI辅助调试**：生成人工干预请求时，启动一个“AI调试助手”聊天窗口。该助手已加载所有失败上下文，可以与用户（特别是技术协作者）进行交互式问答，共同定位问题根源并尝试解决方案。 | （可选）人工干预 | 修复方案或问题报告 |
| **6. 交付与文档** | F-6.1 | 系统自动执行性能、安全扫描，并生成评估报告。 | | 质量评估报告 |
| | F-6.2 | 系统自动生成全套交付文档，包括用户手册、部署文档、API文档和维护手册。 | **最终交付包确认** | 完整的软件交付包（代码、制品、文档） |
| **7. 商业化功能** | F-7.1 | 用户可以注册、登录（支持OAuth），并在个人中心管理所有项目。 | - | 用户账户 |
| | F-7.2 | 用户可以查看各项目的资源使用量（如Token消耗、构建时长）和对应的账单明细。 | - | 账单与用量监控 |
| | F-7.3 | 用户可以根据需求选择不同的付费套餐（基础版、专业版、企业版）并完成支付。 | - | 订阅管理 |
| **8. 持续演进与维护** | F-8.1 | **一键部署与监控**：系统提供与主流云厂商（AWS, Azure, GCP）集成的“一键部署”功能。部署后，自动配置基础的监控和告警。 | **部署环境确认** | 上线的应用URL、监控仪表盘 |
| | F-8.2 | **AI驱动的智能运维**：系统监控线上应用的日志和指标。当检测到异常或Bug时，AI能自动分析问题、创建工单，并尝试生成修复补丁，交由用户确认后部署。 | （可选）自动修复确认 | Bug修复补丁 |
| | F-8.3 | **增量功能开发**：用户可以对已上线的项目提出新的需求。平台将在现有代码库和知识库的基础上，重复2-6的流程，进行增量开发和迭代。 | (同2-6的确认点) | 应用新版本 |

---

## **2. 技术需求规格说明书 (TRS) - AutoDevStudio**

**2.1 系统架构**
*   **总体架构**: 基于微服务的前后端分离架构，部署于云原生环境（Kubernetes）。
*   **前端**: React + TypeScript，使用Zustand或Redux Toolkit进行状态管理，Vite构建，Storybook进行组件开发与文档化。
*   **后端微服务**:
    *   **API Gateway**: 统一入口，负责路由、认证、限流。
    *   **Workflow Orchestration Service**: 核心服务，使用有状态工作流引擎（如Temporal或Camunda）编排整个开发流程（DAG），确保任务的可追溯、重试和补偿。
    *   **Agent Coordination Service**: 管理AI Agent的生命周期、任务分发和状态同步。
    *   **User & Billing Service**: 负责用户身份认证（AuthN）、授权（AuthZ）、项目管理和计费逻辑。
    *   **Artifact Service**: 负责代码、文档、镜像等产物的存储和版本管理。
*   **AI Agent系统**:
    *   **Orchestrator Agent**: 总指挥，负责分解任务、调用其他专用Agent，并根据用户反馈调整计划。
    *   **Specialized Agents**: Requirement, TechStack, Architect, Prototype, Test, Coder, DocWriter等，每个Agent都是一个独立的、可扩展的模块。
    *   **新增专用Agent以增强协同与维护能力**:
        *   **FeedbackAgent**: 专门处理用户在UI原型、需求列表等界面的自然语言反馈，将其转化为对其他Agent的明确指令。
        *   **DebuggerAgent**: 在自动化修复失败时激活，与用户进行交互式调试，提供代码片段建议和根本原因分析。
        *   **SecurityAgent**: 负责执行SAST/DAST/SCA扫描，解读报告，并尝试生成修复代码。
        *   **RefactorAgent**: 持续监控代码库的健康度（如代码异味、复杂度），在TDD循环或特定指令下执行代码重构，确保代码质量。

**2.2 数据存储**
*   **PostgreSQL**: 存储结构化数据，如用户信息、项目元数据、订单、工作流状态。启用行级安全（RLS）实现多租户数据隔离。
*   **MongoDB**: 存储半结构化和非结构化数据，如需求文档、Agent交互日志、设计文档的中间版本。
*   **Vector Database (e.g., Pinecone, Weaviate)**: 存储代码、文档的Embeddings，用于RAG（检索增强生成）和语义搜索。也用于代码相似度分析、重复代码检测和历史解决方案检索，为`RefactorAgent`和`DebuggerAgent`提供支持。
*   **Redis**: 用于高速缓存、会话管理、分布式锁和消息队列。
*   **Object Storage (S3-compatible)**: 存储大型二进制文件，如代码仓库快照、容器镜像、UI原型文件、最终交付包。

**2.3 部署与运维 (DevOps)**
*   **容器化**: 所有服务均使用Docker容器化。
*   **编排**: 使用Kubernetes (K8s) 进行容器编排、服务发现和自动伸缩。
*   **IaC (Infrastructure as Code)**: 使用Terraform管理云资源。
*   **GitOps**: 使用ArgoCD实现声明式的持续部署。
*   **CI/CD**: 建立自动化流水线，负责代码扫描（SAST, SCA, DAST）、构建、测试和部署。
*   **可观测性**: 集成Prometheus（指标）、Loki（日志）、Tempo/Jaeger（追踪）和Grafana（可视化）的监控体系。
*   **AI可观测性 (AI Observability)**: 集成专门的LLM-Ops工具（如LangSmith, Arize AI,或自建方案），用于追踪和可视化Agent的决策链、Token消耗、Prompt/Response日志、幻觉率等，以便于调试和优化核心AI能力。

**2.4 非功能性需求 (Non-Functional Requirements)**

| 类别 | NFR-ID | 需求描述 | 验收标准 |
| :--- | :--- | :--- | :--- |
| **性能** | P-1 | 需求分析响应时间 | 从用户提交需求到生成功能清单 < 2分钟。 |
| | P-2 | 核心代码生成效率 | 单个模块（~1000行代码）的TDD循环完成时间 < 5分钟。 |
| | P-3 | 并发处理能力 | 系统稳定支持1000个并发用户会话。 |
| **可靠性** | R-1 | 系统可用性 | 控制面（平台UI、API）可用性 ≥ 99.9%；数据面（Agent执行）可用性 ≥ 99.5%。 |
| | R-2 | 数据持久性 | 用户核心数据（项目、代码、文档）持久性达到 99.999999999% (11个9)。 |
| | R-3 | 故障恢复 | 工作流具备断点续传能力；关键服务实现跨可用区（Multi-AZ）热备。 |
| **安全性** | S-1 | 数据加密 | 所有静态数据（at-rest）和传输中数据（in-transit）必须加密。用户敏感数据需在应用层加密。 |
| | S-2 | 访问控制 | 严格的RBAC，实现租户（组织/用户）之间的数据和资源硬隔离。API需通过OAuth 2.0/OIDC保护。 |
| | S-3 | 代码执行安全 | 所有由AI生成的代码必须在隔离的沙箱环境（如Firecracker微虚拟机或gVisor）中执行测试，网络策略为默认拒绝。 |
| | S-4 | 供应链安全 | 生成软件物料清单（SBOM），对所有三方依赖进行漏洞扫描（SCA），并遵循SLSA Level 3标准。 |
| | S-5 | Prompt与模型安全 | 实施针对Prompt注入攻击的过滤和防御机制。对AI生成的内容（特别是代码和文档）进行安全扫描，防止输出不安全的代码片段。 |
| **成本效益** | C-1 | 成本优化 | 实施模型路由策略（根据任务复杂性选择不同成本的模型）；广泛使用语义缓存和结果缓存，目标缓存命中率 > 30%。 |
| | C-2 | 成本透明 | 为用户提供每个开发阶段的Token消耗和计算资源成本的实时估算和明细。 |
| **可扩展性与可维护性** | E-1 | Agent框架可扩展性 | 提供清晰的SDK和文档，允许内部开发人员快速创建和集成新的专用Agent，而无需修改核心编排逻辑。 |
| | M-1 | 知识库持续更新 | 建立自动化流程，定期（如每季度）使用最新的开源代码、技术文档和安全漏洞库更新向量数据库，以对抗模型知识的过时性。 |

---

## 1. 系统架构总览

### 1.1 整体架构图
```
┌─────────────────────────────────────────────────────────────────┐
│                        前端层 (Frontend)                         │
├─────────────────────────────────────────────────────────────────┤
│  React + TypeScript + Vite + Zustand + Ant Design + Storybook   │
└─────────────────────────────────────────────────────────────────┘
                               │
┌─────────────────────────────────────────────────────────────────┐
│                       API Gateway 层                            │
├─────────────────────────────────────────────────────────────────┤
│  Kong/Spring Cloud Gateway + OAuth2 + 限流 + 认证               │
└─────────────────────────────────────────────────────────────────┘
                               │
┌─────────────────┬─────────────┬─────────────┬───────────────────┐
│  工作流编排服务  │ Agent协调服务 │ 用户计费服务 │  产物服务        │
├─────────────────┼─────────────┼─────────────┼───────────────────┤
│ Temporal引擎    │ Agent生命周期│ 用户管理     │ 代码存储         │
│ DAG流程管理     │ 任务分发     │ 订阅管理     │ 文档版本管理     │
│ 状态持久化      │ 状态同步     │ 账单生成     │ 制品管理         │
└─────────────────┴─────────────┴─────────────┴───────────────────┘
                               │
┌─────────────────────────────────────────────────────────────────┐
│                        AI Agent 矩阵                            │
├─────────────────┬─────────────┬─────────────┬───────────────────┐
│ Orchestrator    │ Requirement │ TechStack   │ Architect         │
│ Agent           │ Agent       │ Agent       │ Agent             │
├─────────────────┼─────────────┼─────────────┼───────────────────┤
│ Prototype       │ Test Agent  │ Coder Agent │ DocWriter Agent   │
│ Agent           │             │             │                   │
├─────────────────┼─────────────┼─────────────┼───────────────────┤
│ Feedback Agent  │ Debugger    │ Security    │ Refactor Agent    │
│                 │ Agent       │ Agent       │                   │
└─────────────────┴─────────────┴─────────────┴───────────────────┘
                               │
┌─────────────────────────────────────────────────────────────────┐
│                        数据持久化层                             │
├─────────────────┬─────────────┬─────────────┬───────────────────┐
│ PostgreSQL      │ MongoDB     │ 向量数据库   │ 对象存储          │
│ (结构化数据)    │ (文档数据)  │ (Pinecone)  │ (S3兼容)          │
│ 多租户隔离      │ 版本历史    │ 语义搜索     │ 大型文件          │
└─────────────────┴─────────────┴─────────────┴───────────────────┘
```

## 2. 前端详细设计

### 2.1 技术栈配置
```typescript
// package.json 核心依赖
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0",
    "@vitejs/plugin-react": "^4.0.0",
    "zustand": "^4.4.0",
    "react-router-dom": "^6.15.0",
    "antd": "^5.9.0",
    "@ant-design/charts": "^1.4.0",
    "monaco-editor": "^0.44.0",
    "socket.io-client": "^4.7.2",
    "react-beautiful-dnd": "^13.1.1",
    "storybook": "^7.4.0"
  }
}
```

### 2.2 前端模块结构
```
src/
├── components/                 # 通用组件
│   ├── common/                # 基础组件
│   ├── layout/                # 布局组件
│   ├── forms/                 # 表单组件
│   └── charts/                # 图表组件
├── pages/                     # 页面组件
│   ├── ProjectInit/           # 项目初始化 (F-1.1)
│   ├── RequirementAnalysis/   # 需求分析 (F-2.1, F-2.2, F-2.3)
│   ├── TechStackSelection/    # 技术选型 (F-3.1)
│   ├── ArchitectureDesign/    # 架构设计 (F-4.1, F-4.2)
│   ├── Development/           # 开发测试 (F-5.1, F-5.2, F-5.3, F-5.4)
│   ├── Delivery/              # 交付文档 (F-6.1, F-6.2)
│   ├── Billing/               # 商业化功能 (F-7.1, F-7.2, F-7.3)
│   └── Maintenance/           # 持续演进 (F-8.1, F-8.2, F-8.3)
├── stores/                    # Zustand 状态管理
│   ├── projectStore.ts        # 项目状态
│   ├── requirementStore.ts    # 需求状态
│   ├── developmentStore.ts    # 开发状态
│   └── userStore.ts          # 用户状态
├── services/                  # API 服务
│   ├── api/
│   ├── websocket/
│   └── agents/
├── types/                     # TypeScript 类型定义
├── utils/                     # 工具函数
└── hooks/                     # 自定义 Hooks
```

### 2.3 核心页面组件设计

#### 2.3.1 项目初始化页面 (F-1.1)
```tsx
// ProjectInit.tsx
interface ProjectInitData {
  name: string;
  description: string;
  inputSources: {
    text?: string;
    documents?: File[];
    urls?: {
      competitor?: string;
      marketAnalysis?: string;
      design?: string; // Figma/Sketch 链接
    };
  };
}

const ProjectInit: React.FC = () => {
  const [formData, setFormData] = useState<ProjectInitData>();
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  
  return (
    <div className="project-init">
      <Form layout="vertical">
        <Form.Item label="项目名称" required>
          <Input 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </Form.Item>
        
        <Form.Item label="需求描述">
          <TextArea 
            rows={6}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </Form.Item>
        
        <Form.Item label="附加输入源">
          <Tabs>
            <TabPane tab="文档上传" key="documents">
              <Upload.Dragger
                multiple
                beforeUpload={(file) => {
                  // 处理文档上传
                  return false;
                }}
              >
                拖拽文档到这里或点击上传
              </Upload.Dragger>
            </TabPane>
            <TabPane tab="链接输入" key="urls">
              <Input placeholder="竞品URL" />
              <Input placeholder="市场分析报告链接" />
              <Input placeholder="Figma/Sketch设计稿链接" />
            </TabPane>
          </Tabs>
        </Form.Item>
      </Form>
    </div>
  );
};
```

#### 2.3.2 需求分析页面 (F-2.1, F-2.2, F-2.3)
```tsx
// RequirementAnalysis.tsx
interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  userStories: UserStory[];
  editable?: boolean;
}

const RequirementAnalysis: React.FC = () => {
  const { features, setFeatures } = useRequirementStore();
  const [nfrWizardVisible, setNfrWizardVisible] = useState(false);
  
  // 拖拽排序功能点
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const reorderedFeatures = reorder(
      features,
      result.source.index,
      result.destination.index
    );
    
    setFeatures(reorderedFeatures);
    // 触发AI重新评估依赖关系
    triggerAIReevaluation(reorderedFeatures);
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="requirement-analysis">
        {/* 功能点清单 */}
        <Droppable droppableId="features">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {features.map((feature, index) => (
                <Draggable key={feature.id} draggableId={feature.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <FeatureCard 
                        feature={feature}
                        dragHandleProps={provided.dragHandleProps}
                        onEdit={(newFeature) => updateFeature(feature.id, newFeature)}
                        onDelete={() => deleteFeature(feature.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        
        {/* 非功能性需求向导 */}
        <Button onClick={() => setNfrWizardVisible(true)}>
          配置非功能性需求
        </Button>
        
        <NFRWizard
          visible={nfrWizardVisible}
          onFinish={(nfrData) => saveNFR(nfrData)}
          onCancel={() => setNfrWizardVisible(false)}
        />
      </div>
    </DragDropContext>
  );
};
```

#### 2.3.3 原型反馈组件 (F-4.2)
```tsx
// PrototypeFeedback.tsx
interface FeedbackComment {
  id: string;
  x: number;
  y: number;
  content: string;
  elementId?: string;
  status: 'pending' | 'addressed';
}

const PrototypeFeedback: React.FC<{ prototypeUrl: string }> = ({ prototypeUrl }) => {
  const [comments, setComments] = useState<FeedbackComment[]>([]);
  const [isAddingComment, setIsAddingComment] = useState(false);
  
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!isAddingComment) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const content = prompt('请输入反馈意见:');
    if (content) {
      const newComment: FeedbackComment = {
        id: generateId(),
        x,
        y,
        content,
        status: 'pending'
      };
      
      setComments([...comments, newComment]);
      // 发送反馈给 FeedbackAgent
      sendFeedbackToAgent(newComment);
    }
    
    setIsAddingComment(false);
  };
  
  return (
    <div className="prototype-feedback">
      <div className="toolbar">
        <Button 
          type={isAddingComment ? "primary" : "default"}
          onClick={() => setIsAddingComment(!isAddingComment)}
        >
          添加评论
        </Button>
      </div>
      
      <div className="prototype-container" onClick={handleCanvasClick}>
        <iframe src={prototypeUrl} className="prototype-frame" />
        
        {comments.map(comment => (
          <CommentMarker 
            key={comment.id}
            comment={comment}
            onResolve={() => resolveComment(comment.id)}
          />
        ))}
      </div>
      
      <CommentList 
        comments={comments}
        onCommentUpdate={setComments}
      />
    </div>
  );
};
```

#### 2.3.4 AI调试助手组件 (F-5.4)
```tsx
// DebugAssistant.tsx
interface DebugSession {
  id: string;
  context: DebugContext;
  messages: DebugMessage[];
  status: 'active' | 'resolved';
}

const DebugAssistant: React.FC<{ session: DebugSession }> = ({ session }) => {
  const [messages, setMessages] = useState<DebugMessage[]>(session.messages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const sendMessage = async (content: string) => {
    setIsLoading(true);
    
    const userMessage: DebugMessage = {
      id: generateId(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    try {
      // 调用 DebuggerAgent
      const response = await debuggerAgent.ask({
        sessionId: session.id,
        question: content,
        context: session.context
      });
      
      const agentMessage: DebugMessage = {
        id: generateId(),
        type: 'agent',
        content: response.answer,
        codeSnippets: response.codeSnippets,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      console.error('Debug session error:', error);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };
  
  return (
    <div className="debug-assistant">
      <div className="debug-context">
        <h4>调试上下文</h4>
        <pre>{JSON.stringify(session.context, null, 2)}</pre>
      </div>
      
      <div className="chat-messages">
        {messages.map(message => (
          <DebugMessageComponent 
            key={message.id} 
            message={message} 
          />
        ))}
        {isLoading && <div className="loading">AI正在思考...</div>}
      </div>
      
      <div className="chat-input">
        <Input.TextArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPressEnter={(e) => {
            if (e.shiftKey) return;
            e.preventDefault();
            if (input.trim()) sendMessage(input.trim());
          }}
          placeholder="向AI调试助手提问..."
          rows={3}
        />
        <Button 
          type="primary" 
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || isLoading}
        >
          发送
        </Button>
      </div>
    </div>
  );
};
```

## 3. 后端详细设计

### 3.1 微服务架构

#### 3.1.1 API Gateway 服务
```yaml
# kong-config.yaml
services:
  - name: workflow-orchestration
    url: http://workflow-service:8080
    routes:
      - name: workflow-routes
        paths: ["/api/workflow/*"]
        
  - name: agent-coordination
    url: http://agent-service:8081
    routes:
      - name: agent-routes
        paths: ["/api/agents/*"]
        
  - name: user-billing
    url: http://user-service:8082
    routes:
      - name: user-routes
        paths: ["/api/user/*", "/api/billing/*"]
        
plugins:
  - name: key-auth
    config:
      key_names: ["X-API-Key"]
      
  - name: rate-limiting
    config:
      minute: 100
      hour: 1000
```

#### 3.1.2 工作流编排服务 (Workflow Orchestration Service)
```java
// WorkflowService.java
@Service
public class WorkflowService {
    
    @Autowired
    private TemporalClient temporalClient;
    
    public String startProjectWorkflow(ProjectInitRequest request) {
        SoftwareDevelopmentWorkflow workflow = 
            temporalClient.newWorkflowStub(SoftwareDevelopmentWorkflow.class);
        
        WorkflowOptions options = WorkflowOptions.newBuilder()
            .setWorkflowId("project-" + request.getProjectId())
            .setTaskQueue("software-dev-queue")
            .build();
            
        WorkflowClient.start(workflow::execute, request);
        
        return "project-" + request.getProjectId();
    }
}

// SoftwareDevelopmentWorkflow.java
@WorkflowInterface
public interface SoftwareDevelopmentWorkflow {
    
    @WorkflowMethod
    void execute(ProjectInitRequest request);
    
    // 信号方法，用于用户确认
    @SignalMethod
    void confirmRequirements(RequirementConfirmation confirmation);
    
    @SignalMethod
    void confirmArchitecture(ArchitectureConfirmation confirmation);
    
    @QueryMethod
    WorkflowStatus getStatus();
}
```

#### 3.1.3 Agent 协调服务 (Agent Coordination Service)
```python
# agent_coordination_service.py
class AgentCoordinator:
    def __init__(self):
        self.agent_registry = AgentRegistry()
        self.task_queue = asyncio.Queue()
        self.agent_pool = AgentPool()
        
    async def dispatch_task(self, task: AgentTask):
        """分发任务给合适的Agent"""
        suitable_agents = self.agent_registry.find_agents_for_task(task.type)
        
        for agent in suitable_agents:
            if await agent.is_available():
                return await agent.execute(task)
                
        raise NoAvailableAgentError(f"No available agent for task: {task.type}")
    
    async def handle_feedback(self, feedback: UserFeedback):
        """处理用户反馈，重新调整任务"""
        feedback_agent = self.agent_registry.get_agent("feedback")
        adjusted_tasks = await feedback_agent.process_feedback(feedback)
        
        for task in adjusted_tasks:
            await self.dispatch_task(task)

# agent_registry.py
class AgentRegistry:
    def __init__(self):
        self.agents = {
            "orchestrator": OrchestratorAgent(),
            "requirement": RequirementAgent(),
            "techstack": TechStackAgent(),
            "architect": ArchitectAgent(),
            "prototype": PrototypeAgent(),
            "test": TestAgent(),
            "coder": CoderAgent(),
            "docwriter": DocWriterAgent(),
            "feedback": FeedbackAgent(),
            "debugger": DebuggerAgent(),
            "security": SecurityAgent(),
            "refactor": RefactorAgent()
        }
    
    def get_agent(self, agent_type: str) -> BaseAgent:
        return self.agents.get(agent_type)
```

### 3.2 数据库设计

#### 3.2.1 PostgreSQL 表结构
```sql
-- 用户和项目管理
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    auth_provider VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    owner_id UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    organization_id UUID REFERENCES organizations(id),
    status VARCHAR(50) DEFAULT 'initializing',
    current_phase VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 启用行级安全
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY project_isolation ON projects 
    USING (organization_id IN (
        SELECT organization_id FROM organization_members 
        WHERE user_id = current_user_id()
    ));

-- 需求管理
CREATE TABLE project_requirements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id),
    feature_list JSONB, -- 功能点清单
    user_story_map JSONB, -- 用户故事地图
    nfr_requirements JSONB, -- 非功能性需求
    priority_order JSONB, -- 优先级排序
    status VARCHAR(50) DEFAULT 'draft',
    confirmed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 技术栈选择
CREATE TABLE tech_stack_selections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id),
    recommended_stacks JSONB, -- 推荐的技术栈方案
    selected_stack JSONB, -- 用户选择的技术栈
    analysis_result JSONB, -- 优缺点分析
    confirmed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 账单和订阅
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id),
    plan_type VARCHAR(50) NOT NULL, -- basic/pro/enterprise
    status VARCHAR(50) DEFAULT 'active',
    current_period_start TIMESTAMPTZ,
    current_period_end TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE resource_usage (
    id UUID PRIMARY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id),
    token_usage INTEGER,
    build_duration INTERVAL,
    storage_usage BIGINT,
    recorded_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### 3.2.2 MongoDB 集合设计
```javascript
// 需求文档版本历史
db.requirement_versions.insertOne({
  project_id: "uuid",
  version: 1,
  feature_list: [...],
  user_story_map: {...},
  nfr_requirements: {...},
  created_by: "user_id",
  created_at: ISODate(),
  change_reason: "用户拖拽调整优先级"
});

// Agent交互日志
db.agent_interactions.insertOne({
  project_id: "uuid",
  agent_type: "requirement",
  task_id: "uuid",
  input_data: {...},
  output_data: {...},
  token_usage: 1500,
  duration_ms: 4500,
  timestamp: ISODate(),
  status: "completed"
});

// 原型反馈记录
db.prototype_feedbacks.insertOne({
  project_id: "uuid",
  prototype_version: 2,
  comments: [
    {
      id: "comment_1",
      position: {x: 100, y: 200},
      content: "按钮颜色换成蓝色",
      status: "addressed",
      addressed_in_version: 3
    }
  ],
  created_at: ISODate()
});
```

#### 3.2.3 向量数据库 Schema
```python
# 代码片段向量存储
code_embeddings_schema = {
    "project_id": "uuid",
    "file_path": "string",
    "function_name": "string", 
    "code_snippet": "text",
    "embedding": "vector(1536)",  # OpenAI embedding 维度
    "metadata": {
        "language": "python|javascript|...",
        "complexity": "float",
        "test_coverage": "float",
        "last_modified": "timestamp"
    }
}

# 文档知识向量存储
document_embeddings_schema = {
    "project_id": "uuid",
    "doc_type": "requirement|architecture|api|user_manual",
    "content": "text",
    "embedding": "vector(1536)",
    "metadata": {
        "version": "integer",
        "created_by": "agent_type",
        "references": ["doc_id1", "doc_id2"]
    }
}
```

### 3.3 AI Agent 详细设计

#### 3.3.1 Agent 基类设计
```python
# base_agent.py
from abc import ABC, abstractmethod
from typing import Dict, Any, List
import asyncio

class BaseAgent(ABC):
    def __init__(self, name: str, capabilities: List[str]):
        self.name = name
        self.capabilities = capabilities
        self.llm_client = LLMClient()
        self.vector_db = VectorDBClient()
        
    @abstractmethod
    async def execute(self, task: AgentTask) -> AgentResult:
        """执行Agent的核心任务"""
        pass
        
    async def retrieve_context(self, query: str, project_id: str) -> List[Dict]:
        """从向量数据库检索相关上下文"""
        return await self.vector_db.similarity_search(
            query=query,
            project_id=project_id,
            limit=5
        )
        
    def build_prompt(self, task: AgentTask, context: List[Dict]) -> str:
        """构建任务特定的Prompt"""
        # 基础Prompt模板
        base_prompt = f"""
        你是一个{self.name}，负责{task.description}。
        
        项目背景:
        {task.project_context}
        
        相关上下文:
        {self.format_context(context)}
        
        具体任务:
        {task.instructions}
        """
        return base_prompt
        
    async def call_llm(self, prompt: str, **kwargs) -> str:
        """调用LLM并返回结果"""
        return await self.llm_client.generate(
            prompt=prompt,
            **kwargs
        )

class AgentTask:
    def __init__(self, task_id: str, task_type: str, project_id: str, 
                 data: Dict[str, Any], instructions: str):
        self.task_id = task_id
        self.task_type = task_type
        self.project_id = project_id
        self.data = data
        self.instructions = instructions
        self.project_context = ""
```

#### 3.3.2 专用 Agent 实现

**Feedback Agent (F-4.2)**
```python
# feedback_agent.py
class FeedbackAgent(BaseAgent):
    def __init__(self):
        super().__init__("FeedbackAgent", ["process_feedback", "adjust_requirements"])
        
    async def execute(self, task: AgentTask) -> AgentResult:
        if task.task_type == "process_ui_feedback":
            return await self.process_ui_feedback(task)
        elif task.task_type == "adjust_requirements":
            return await self.adjust_requirements_based_on_feedback(task)
            
    async def process_ui_feedback(self, task: AgentTask) -> AgentResult:
        """处理UI原型反馈"""
        feedback_comments = task.data.get("comments", [])
        current_prototype = task.data.get("current_prototype")
        
        # 分析反馈内容
        feedback_analysis = await self.analyze_feedback(feedback_comments)
        
        # 生成修改指令给PrototypeAgent
        modification_instructions = self.generate_modification_instructions(
            feedback_analysis, current_prototype
        )
        
        return AgentResult(
            success=True,
            data={
                "modification_instructions": modification_instructions,
                "next_actions": ["update_prototype"]
            }
        )
        
    async def analyze_feedback(self, comments: List[Dict]) -> Dict:
        """分析用户反馈内容"""
        analysis_prompt = f"""
        分析以下用户对UI原型的反馈，识别核心问题和改进建议：
        
        反馈内容:
        {json.dumps(comments, indent=2)}
        
        请按以下格式输出分析结果：
        1. 主要问题分类（布局、颜色、交互、内容等）
        2. 优先级排序
        3. 具体的修改建议
        """
        
        analysis_result = await self.call_llm(analysis_prompt)
        return self.parse_analysis_result(analysis_result)
```

**Debugger Agent (F-5.4)**
```python
# debugger_agent.py
class DebuggerAgent(BaseAgent):
    def __init__(self):
        super().__init__("DebuggerAgent", [
            "interactive_debugging", 
            "root_cause_analysis",
            "code_fix_suggestion"
        ])
        
    async def execute(self, task: AgentTask) -> AgentResult:
        if task.task_type == "interactive_debug":
            return await self.interactive_debugging(task)
        elif task.task_type == "analyze_failure":
            return await self.analyze_test_failure(task)
            
    async def interactive_debugging(self, task: AgentTask) -> AgentResult:
        """交互式调试会话"""
        debug_context = task.data.get("debug_context", {})
        user_question = task.data.get("user_question", "")
        
        # 检索相关的代码和错误信息
        relevant_code = await self.retrieve_relevant_code(debug_context)
        error_logs = debug_context.get("error_logs", [])
        test_failures = debug_context.get("test_failures", [])
        
        debug_prompt = f"""
        你是一个AI调试助手，帮助用户解决代码问题。
        
        调试上下文：
        - 错误日志: {error_logs}
        - 测试失败: {test_failures}
        - 相关代码: {relevant_code}
        
        用户问题: {user_question}
        
        请提供：
        1. 问题根本原因分析
        2. 具体的修复建议和代码片段
        3. 预防类似问题的建议
        """
        
        debug_response = await self.call_llm(debug_prompt)
        
        return AgentResult(
            success=True,
            data={
                "answer": debug_response,
                "code_snippets": self.extract_code_snippets(debug_response),
                "suggested_fixes": self.extract_fixes(debug_response)
            }
        )
```

**Security Agent**
```python
# security_agent.py
class SecurityAgent(BaseAgent):
    def __init__(self):
        super().__init__("SecurityAgent", [
            "security_scanning",
            "vulnerability_analysis", 
            "security_fix_generation"
        ])
        self.sast_tools = ["semgrep", "bandit", "eslint"]
        self.sca_tools = ["snyk", "dependabot"]
        
    async def execute(self, task: AgentTask) -> AgentResult:
        if task.task_type == "security_scan":
            return await self.perform_security_scan(task)
        elif task.task_type == "generate_security_fix":
            return await self.generate_security_fix(task)
            
    async def perform_security_scan(self, task: AgentTask) -> AgentResult:
        """执行安全扫描"""
        codebase = task.data.get("codebase")
        dependencies = task.data.get("dependencies", [])
        
        # 执行SAST扫描
        sast_results = await self.run_sast_scan(codebase)
        # 执行SCA扫描
        sca_results = await self.run_sca_scan(dependencies)
        # 执行DAST扫描（如果适用）
        dast_results = await self.run_dast_scan(task.data.get("deployment_url"))
        
        # 分析扫描结果
        security_analysis = await self.analyze_security_issues(
            sast_results + sca_results + dast_results
        )
        
        return AgentResult(
            success=True,
            data={
                "security_report": security_analysis,
                "critical_issues": self.filter_critical_issues(security_analysis),
                "recommended_fixes": await self.generate_fix_recommendations(security_analysis)
            }
        )
```

**Refactor Agent**
```python
# refactor_agent.py
class RefactorAgent(BaseAgent):
    def __init__(self):
        super().__init__("RefactorAgent", [
            "code_quality_analysis",
            "refactoring_suggestion",
            "complexity_reduction"
        ])
        
    async def execute(self, task: AgentTask) -> AgentResult:
        if task.task_type == "analyze_code_health":
            return await self.analyze_code_health(task)
        elif task.task_type == "suggest_refactoring":
            return await self.suggest_refactoring(task)
            
    async def analyze_code_health(self, task: AgentTask) -> AgentResult:
        """分析代码健康度"""
        codebase = task.data.get("codebase")
        metrics = task.data.get("metrics", {})
        
        # 计算代码质量指标
        quality_metrics = await self.calculate_quality_metrics(codebase)
        
        # 识别代码异味
        code_smells = await self.identify_code_smells(codebase)
        
        # 分析架构问题
        architecture_issues = await self.analyze_architecture(codebase)
        
        refactor_prompt = f"""
        分析以下代码库的健康状况：
        
        代码质量指标: {quality_metrics}
        识别的代码异味: {code_smells}
        架构问题: {architecture_issues}
        
        请提供：
        1. 整体代码健康评分（1-10）
        2. 需要优先重构的模块
        3. 具体的重构建议
        4. 预期改进效果
        """
        
        analysis_result = await self.call_llm(refactor_prompt)
        
        return AgentResult(
            success=True,
            data={
                "health_score": self.extract_health_score(analysis_result),
                "refactoring_priorities": self.extract_priorities(analysis_result),
                "detailed_recommendations": analysis_result
            }
        )
```

## 4. 部署与运维设计

### 4.1 Kubernetes 部署配置
```yaml
# k8s/workflow-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: workflow-orchestration
spec:
  replicas: 3
  selector:
    matchLabels:
      app: workflow-orchestration
  template:
    metadata:
      labels:
        app: workflow-orchestration
    spec:
      containers:
      - name: workflow-service
        image: autodevstudio/workflow-service:latest
        ports:
        - containerPort: 8080
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        - name: TEMPORAL_HOST
          value: "temporal-frontend:7233"
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: workflow-service
spec:
  selector:
    app: workflow-orchestration
  ports:
  - port: 8080
    targetPort: 8080
```

### 4.2 监控与可观测性配置
```yaml
# monitoring/prometheus-rules.yaml
groups:
- name: autodevstudio
  rules:
  - alert: HighTokenUsage
    expr: sum(rate(agent_token_usage_total[5m])) by (project_id) > 10000
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "高Token使用率"
      description: "项目 {{ $labels.project_id }} 的Token使用率异常高"
  
  - alert: WorkflowStuck
    expr: workflow_duration_seconds > 3600
    for: 10m
    labels:
      severity: critical
    annotations:
      summary: "工作流执行超时"
      description: "工作流 {{ $labels.workflow_id }} 已执行超过1小时"
  
  - alert: AgentFailureRateHigh
    expr: rate(agent_failures_total[5m]) / rate(agent_requests_total[5m]) > 0.1
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "Agent失败率过高"
      description: "Agent {{ $labels.agent_type }} 失败率超过10%"
```

### 4.3 AI 可观测性设计
```python
# ai_observability.py
class AIObservability:
    def __init__(self):
        self.prometheus_client = PrometheusClient()
        self.langsmith_client = LangSmithClient()
        
    async def track_agent_execution(self, agent_type: str, task: AgentTask, 
                                  result: AgentResult, metrics: Dict):
        """追踪Agent执行情况"""
        
        # 记录基础指标
        self.prometheus_client.inc_counter(
            'agent_executions_total',
            labels={'agent_type': agent_type, 'status': 'success' if result.success else 'failure'}
        )
        
        self.prometheus_client.observe_histogram(
            'agent_execution_duration_seconds',
            value=metrics['duration'],
            labels={'agent_type': agent_type}
        )
        
        self.prometheus_client.observe_histogram(
            'agent_token_usage',
            value=metrics['token_usage'],
            labels={'agent_type': agent_type}
        )
        
        # 记录到LangSmith用于LLM调试
        await self.langsmith_client.record_trace(
            project_name="autodevstudio",
            execution_type=agent_type,
            inputs=task.data,
            outputs=result.data,
            metadata={
                'token_usage': metrics['token_usage'],
                'duration_ms': metrics['duration'] * 1000,
                'project_id': task.project_id
            }
        )
        
    def calculate_ai_metrics(self) -> Dict:
        """计算AI相关指标"""
        return {
            'hallucination_rate': self.calculate_hallucination_rate(),
            'cache_hit_rate': self.calculate_cache_hit_rate(),
            'avg_token_per_task': self.calculate_avg_tokens(),
            'agent_success_rate': self.calculate_success_rate()
        }
```

## 5. 安全设计

### 5.1 代码执行沙箱
```python
# code_sandbox.py
import firecracker
import gvisor

class CodeExecutionSandbox:
    def __init__(self):
        self.firecracker_config = self._load_firecracker_config()
        self.network_policy = self._create_network_policy()
        
    async def execute_generated_code(self, code: str, language: str) -> ExecutionResult:
        """在沙箱中执行生成的代码"""
        
        # 创建微VM
        vm = await self.create_micro_vm()
        
        try:
            # 复制代码到VM
            await self.copy_code_to_vm(vm, code, language)
            
            # 应用网络策略（默认拒绝所有）
            await self.apply_network_policy(vm, self.network_policy)
            
            # 执行代码
            result = await vm.execute_code(code, language)
            
            # 安全检查
            security_scan = await self.security_scan_execution(result)
            
            return ExecutionResult(
                success=result.exit_code == 0,
                output=result.stdout,
                error=result.stderr,
                security_issues=security_scan.issues
            )
            
        finally:
            # 清理VM
            await vm.cleanup()
            
    def _create_network_policy(self) -> NetworkPolicy:
        """创建默认拒绝的网络策略"""
        return NetworkPolicy(
            default_action="deny",
            allowed_ports=[],
            allowed_hosts=[]
        )
```

### 5.2 供应链安全
```python
# supply_chain_security.py
class SupplyChainSecurity:
    def __init__(self):
        self.snyk_client = SnykClient()
        self.oss_index = OSSIndexClient()
        
    async def generate_sbom_and_scan(self, project_id: str, dependencies: List) -> SecurityReport:
        """生成SBOM并执行安全扫描"""
        
        # 生成软件物料清单
        sbom = await self.generate_sbom(project_id, dependencies)
        
        # SCA扫描
        sca_results = await self.snyk_client.scan_dependencies(dependencies)
        
        # 漏洞数据库检查
        vulnerability_check = await self.oss_index.check_vulnerabilities(dependencies)
        
        # 遵循SLSA Level 3标准
        slsa_compliance = await self.verify_slsa_compliance(sbom)
        
        return SecurityReport(
            sbom=sbom,
            vulnerabilities=sca_results.vulnerabilities + vulnerability_check.issues,
            slsa_level=slsa_compliance.level,
            recommendations=self.generate_fix_recommendations(sca_results, vulnerability_check)
        )
        
    async def verify_slsa_compliance(self, sbom: SBOM) -> SLSACompliance:
        """验证SLSA Level 3合规性"""
        checks = [
            self._check_build_provenance(sbom),
            self._check_hermetic_build(sbom),
            self._check_parameterless_build(sbom),
            self._check_isolated_build(sbom)
        ]
        
        results = await asyncio.gather(*checks)
        
        return SLSACompliance(
            level=3 if all(results) else 2,
            details={check: result for check, result in zip(checks, results)}
        )
```

## 6. 非功能性需求实现

### 6.1 性能优化策略
```python
# performance_optimizer.py
class PerformanceOptimizer:
    def __init__(self):
        self.semantic_cache = SemanticCache()
        self.result_cache = RedisCache()
        self.model_router = ModelRouter()
        
    async def optimize_agent_execution(self, agent_type: str, task: AgentTask) -> Optional[AgentResult]:
        """优化Agent执行性能"""
        
        # 1. 语义缓存检查
        cache_key = await self.semantic_cache.generate_key(task)
        cached_result = await self.semantic_cache.get(cache_key)
        if cached_result:
            self.prometheus_client.inc_counter('cache_hits_total', labels={'type': 'semantic'})
            return cached_result
            
        # 2. 结果缓存检查
        result_key = f"result:{task.task_type}:{hash(str(task.data))}"
        cached_result = await self.result_cache.get(result_key)
        if cached_result:
            self.prometheus_client.inc_counter('cache_hits_total', labels={'type': 'result'})
            return cached_result
            
        # 3. 模型路由优化
        optimal_model = await self.model_router.select_optimal_model(
            agent_type=agent_type,
            task_complexity=self.estimate_complexity(task),
            cost_constraints=task.data.get('cost_constraints')
        )
        
        return None  # 需要实际执行
        
    def estimate_complexity(self, task: AgentTask) -> str:
        """估算任务复杂度"""
        data_size = len(str(task.data))
        instruction_complexity = len(task.instructions.split())
        
        if data_size > 10000 or instruction_complexity > 500:
            return "high"
        elif data_size > 1000 or instruction_complexity > 100:
            return "medium"
        else:
            return "low"
```

### 6.2 可靠性保障
```python
# reliability_manager.py
class ReliabilityManager:
    def __init__(self):
        self.circuit_breaker = CircuitBreaker()
        self.retry_policy = RetryPolicy()
        self.fallback_strategy = FallbackStrategy()
        
    async def execute_with_reliability(self, operation: Callable, *args, **kwargs):
        """带可靠性保障的执行"""
        
        # 断路器检查
        if not self.circuit_breaker.allow_execution(operation.__name__):
            return await self.fallback_strategy.execute_fallback(operation.__name__, args)
            
        try:
            # 重试策略
            result = await self.retry_policy.execute_with_retry(
                operation, *args, **kwargs
            )
            
            # 记录成功
            self.circuit_breaker.record_success(operation.__name__)
            return result
            
        except Exception as e:
            # 记录失败
            self.circuit_breaker.record_failure(operation.__name__)
            
            # 执行降级策略
            return await self.fallback_strategy.execute_fallback(
                operation.__name__, args, error=e
            )
```

## 7. 校验结果

### 7.1 用户需求覆盖校验

✅ **项目初始化 (F-1.1)**
- 支持文本、文档上传、URL输入（竞品、市场分析、设计稿）
- 项目空间创建

✅ **需求分析 (F-2.1, F-2.2, F-2.3)**
- 功能点清单生成
- 可交互用户故事地图（拖拽调整优先级）
- 引导式NFR定义（提问式交互）
- 用户确认点实现

✅ **技术选型 (F-3.1)**
- 多技术栈方案推荐
- 优缺点、成本、风险分析
- 用户确认机制

✅ **架构与设计 (F-4.1, F-4.2)**
- 系统架构图生成（C4模型）
- 可交互UI原型
- 多轮反馈优化机制
- 用户确认点实现

✅ **开发与测试 (F-5.1, F-5.2, F-5.3, F-5.4)**
- 测试用例生成（Gherkin格式）
- TDD自动化循环
- 实时进度看板
- AI调试助手（交互式问答）

✅ **交付与文档 (F-6.1, F-6.2)**
- 自动化质量扫描
- 全套文档生成
- 用户确认机制

✅ **商业化功能 (F-7.1, F-7.2, F-7.3)**
- 用户注册登录（OAuth）
- 资源使用量监控
- 多层级付费套餐

✅ **持续演进与维护 (F-8.1, F-8.2, F-8.3)**
- 一键云部署（AWS/Azure/GCP）
- AI智能运维（自动Bug检测修复）
- 增量功能开发支持

### 7.2 技术需求覆盖校验

✅ **系统架构**
- 微服务架构（API Gateway + 多个后端服务）
- 前端React + TypeScript + Zustand + Vite
- 工作流编排（Temporal）
- 完整Agent矩阵（包含新增的4个专用Agent）

✅ **数据存储**
- PostgreSQL（结构化数据 + RLS多租户隔离）
- MongoDB（文档数据）
- 向量数据库（语义搜索）
- 对象存储（大型文件）
- Redis（缓存和会话）

✅ **部署与运维**
- Docker容器化
- Kubernetes编排
- Terraform IaC
- ArgoCD GitOps
- 完整可观测性栈（Prometheus/Loki/Jaeger/Grafana）
- AI可观测性（Agent决策追踪）

✅ **非功能性需求**
- **性能**: 缓存策略、模型路由、响应时间达标
- **可靠性**: 断路器、重试、降级、多AZ部署
- **安全性**: 沙箱执行、RBAC、数据加密、供应链安全
- **成本效益**: 缓存命中率>30%、成本透明
- **可扩展性**: Agent框架SDK、知识库自动更新

# 核心约束条件

## 执行环境约束
- **目标执行器**：Google Jules等大模型
- **输出格式**：纯 Markdown，无代码实现
- **执行模式**：原子化分步执行，支持人工中断和增量继续

## 内容完整性约束
- **零发散原则**：严格基于需求文档，禁止添加任何额外功能
- **无遗漏验证**：每个需求必须有对应的实现模块和文件
- **依赖闭环**：每个任务必须明确定义前置依赖和完成标准

## 结构化约束
- **文件级别细化**：每个文件必须有唯一编号和明确功能描述
- **函数级别定义**：关键函数必须定义签名、输入、输出和约束
- **模块独立原则**：模块间耦合度最低，支持独立开发和测试

# 输出规范

## 第一阶段：项目架构蓝图

### 1.1 完整项目目录树
```
要求：展示所有文件和目录的完整结构，包含唯一编号前缀
格式：标准的树状结构，标注文件类型和核心职责
```

### 1.2 技术栈约束表
```
要求：基于技术需求确定各层技术选型
内容：前端框架、后端框架、数据库、测试框架等
```

## 第二阶段：模块化开发计划

#### 模块划分规范
- **垂直拆分**：按业务功能域划分，确保功能完整性
- **接口明确定义**：模块间通过标准化接口通信
- **独立测试性**：每个模块包含完整的测试体系

### 模块描述模板
```markdown
## 模块 [编号]: [模块名称]

**功能范围**：[明确的功能边界，不与其他模块重叠]

**文件清单**：
| 编号 | 文件路径 | 类型 | 核心职责 | 关键依赖 |
|------|----------|------|----------|----------|

**接口契约**：
- 输入接口：[函数签名、参数约束、数据格式]
- 输出接口：[返回值规范、异常定义、状态码]

**测试策略**：
- 单元测试覆盖点：[具体函数和边界条件]
- 集成测试场景：[跨模块交互和数据流]
- 端到端测试流程：[完整用户操作路径]
```

## 第三阶段：分步实施路线图

### 执行顺序原则
1. **自下而上**：基础设施 → 核心业务 → 接口适配 → 系统集成
2. **测试驱动**：每个任务必须先定义测试用例
3. **依赖优先**：被依赖的模块和文件优先开发

### 任务卡片格式
```markdown
# 阶段 [X]: [阶段名称]

## 任务 [编号]: [任务标题]
**目标文件**：`[文件编号]_[文件名]`
**依赖文件**：`[前置文件编号列表]` 或 "无"

**核心函数定义**：
```
函数名称(参数: 类型) -> 返回类型
功能描述：明确的功能目标和业务逻辑
输入约束：参数取值范围、格式要求
输出保证：返回值语义、异常情况
```

**测试验证要求**：
- 测试文件：`[测试文件编号]`
- 验证场景：[具体的测试用例，包括正常和异常情况]
- 通过标准：[可量化的完成指标，如测试覆盖率、性能指标]

**完成检查清单**：
- [ ] 源代码文件创建和函数实现
- [ ] 单元测试编写并通过
- [ ] 集成测试验证通过
- [ ] 接口文档更新
- [ ] 部署配置更新（如需要）
```

# 质量保障机制

## 依赖关系校验
在输出最终计划前，必须执行：
1. **循环依赖检测**：确保文件间无循环依赖
2. **接口一致性验证**：跨模块接口定义完全一致
3. **需求覆盖度检查**：每个需求项都有对应的实现路径

### 需求追溯矩阵
建立四层映射关系：
```
用户需求 → 技术模块 → 代码文件 → 具体函数
```
确保：
- 每个用户需求都有完整的实现链路
- 每个技术约束都有对应的代码规范
- 无功能遗漏或范围蔓延

# 异常处理与进度管理

## 澄清请求条件
当遇到以下情况时必须请求澄清：
1. 需求中存在矛盾或不可实现的技术约束
2. 接口定义不完整影响模块拆分
3. 发现无法满足的性能、安全或兼容性要求

## 输出控制机制
**计划过长时的处理方案**：
1. 按模块分批次输出，明确标识当前批次和剩余部分
2. 提供进度跟踪：`已完成 [A]%，剩余 [B] 个模块，[C] 个文件`
3. 保持上下文连续性，确保分批次输出能完整组装

**大模型执行限制处理**：
1. 如果单个任务过大，进一步拆分为子任务
2. 明确标识任务的"断点"和"继续点"
3. 提供任务间的状态传递说明

# 验证与交付标准

## 最终校验清单
在交付开发计划前，确认：
- [ ] 所有用户需求都有对应的实现模块
- [ ] 所有技术约束都有对应的解决方案
- [ ] 文件编号唯一且连续
- [ ] 依赖关系无循环且完整
- [ ] 测试策略覆盖所有业务场景
- [ ] 部署和安装需求有对应文档规划

## 交付物格式
最终输出必须是结构完整的 Markdown 文档，包含：
1. 项目架构蓝图
2. 模块化开发计划
3. 分步实施路线图
4. 质量保障说明
5. 异常处理方案
