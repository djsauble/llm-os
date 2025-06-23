import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  type Connection,
  type Edge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import TaskNode from './TaskNode';
import InputNode from './InputNode';
import OutputNode from './OutputNode';

const nodeTypes = {
  task: TaskNode,
  input: InputNode,
  output: OutputNode,
};

const initialNodes = [
  {
    id: 'input-1',
    type: 'input',
    position: { x: 100, y: 100 },
    data: { label: 'User Input' },
  },
  {
    id: 'task-1',
    type: 'task',
    position: { x: 300, y: 50 },
    data: { 
      label: 'Data Processing Task',
      description: 'Process incoming user data and extract key information'
    },
  },
  {
    id: 'task-2',
    type: 'task',
    position: { x: 300, y: 200 },
    data: { 
      label: 'Analysis Task',
      description: 'Analyze processed data and generate insights'
    },
  },
  {
    id: 'task-3',
    type: 'task',
    position: { x: 700, y: 100 },
    data: { 
      label: 'Report Generation Task',
      description: 'Create comprehensive report from analysis results'
    },
  },
  {
    id: 'output-1',
    type: 'output',
    position: { x: 1050, y: 100 },
    data: { label: 'Task Output' },
  },
] as any[];

const initialEdges = [
  { id: 'e1-2', source: 'input-1', target: 'task-1' },
  { id: 'e1-3', source: 'input-1', target: 'task-2' },
  { id: 'e2-4', source: 'task-1', target: 'task-3' },
  { id: 'e3-4', source: 'task-2', target: 'task-3' },
  { id: 'e4-5', source: 'task-3', target: 'output-1' },
];

export default function TaskFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
