import { Handle, Position, type NodeProps } from 'reactflow';
import { Check } from 'react-feather';

interface OutputNodeData {
  label: string;
}

export default function OutputNode({ data }: NodeProps<OutputNodeData>) {
  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} />
      
      <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-4 min-w-[150px] shadow-lg">
        <div className="flex items-center justify-center">
          <Check size={20} className="text-purple-600 mr-2" />
          <h3 className="font-semibold text-sm text-purple-800">{data.label}</h3>
        </div>
      </div>
    </div>
  );
}
