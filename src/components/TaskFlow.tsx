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
import { TaskFlowSchema, type TaskFlowData } from '../schemas/taskFlow';

const nodeTypes = {
  task: TaskNode,
  input: InputNode,
  output: OutputNode,
};

interface TaskFlowProps {
  data: TaskFlowData;
}

export default function TaskFlow({ data }: TaskFlowProps) {
  // Validate the data
  const validatedData = TaskFlowSchema.parse(data);
  
  const [nodes, , onNodesChange] = useNodesState(validatedData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(validatedData.edges);

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
