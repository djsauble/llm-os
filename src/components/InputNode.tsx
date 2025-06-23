import { Handle, Position, type NodeProps } from 'reactflow';
import { ArrowRight } from 'react-feather';

interface InputNodeData {
  label: string;
}

export default function InputNode({ data }: NodeProps<InputNodeData>) {
  return (
    <div className="relative">
      <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 min-w-[150px] shadow-lg">
        <div className="flex items-center justify-center">
          <ArrowRight size={20} className="text-green-600 mr-2" />
          <h3 className="font-semibold text-sm text-green-800">{data.label}</h3>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
