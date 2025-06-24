import { z } from 'zod';

export const NodeSchema = z.object({
  id: z.string(),
  type: z.enum(['input', 'task', 'output']),
  position: z.object({
    x: z.number(),
    y: z.number(),
  }),
  data: z.object({
    label: z.string(),
    description: z.string().optional(),
  }),
});

export const EdgeSchema = z.object({
  id: z.string(),
  source: z.string(),
  target: z.string(),
});

export const TaskFlowSchema = z.object({
  nodes: z.array(NodeSchema),
  edges: z.array(EdgeSchema),
});

export type TaskFlowData = z.infer<typeof TaskFlowSchema>;
export type NodeData = z.infer<typeof NodeSchema>;
export type EdgeData = z.infer<typeof EdgeSchema>;

// Mock data that conforms to the schema
export const mockTaskFlowData: TaskFlowData = {
  nodes: [
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
  ],
  edges: [
    { id: 'e1-2', source: 'input-1', target: 'task-1' },
    { id: 'e1-3', source: 'input-1', target: 'task-2' },
    { id: 'e2-4', source: 'task-1', target: 'task-3' },
    { id: 'e3-4', source: 'task-2', target: 'task-3' },
    { id: 'e4-5', source: 'task-3', target: 'output-1' },
  ],
};
