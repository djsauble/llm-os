import { useState } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { ChevronDown, User, Cpu, Database, Tool } from 'react-feather';

interface TaskNodeData {
  label: string;
  description?: string;
}

export default function TaskNode({ data }: NodeProps<TaskNodeData>) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = (action: string) => {
    console.log(`${action} clicked for task: ${data.label}`);
    setShowDropdown(false);
    // TODO: Implement actual functionality
  };

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} />
      
      <div className="bg-white border-2 border-blue-500 rounded-lg p-4 min-w-[200px] shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm text-gray-900">{data.label}</h3>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <ChevronDown size={16} />
          </button>
        </div>
        
        {data.description && (
          <p className="text-xs text-gray-600 mb-2">{data.description}</p>
        )}

        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-full">
            <div className="py-1">
              <button
                onClick={() => handleMenuClick('Agent')}
                className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Cpu size={14} className="mr-2" />
                Configure Agent
              </button>
              <button
                onClick={() => handleMenuClick('Human')}
                className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <User size={14} className="mr-2" />
                Human Feedback
              </button>
              <button
                onClick={() => handleMenuClick('Context')}
                className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Database size={14} className="mr-2" />
                Global Context
              </button>
              <button
                onClick={() => handleMenuClick('Tools')}
                className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Tool size={14} className="mr-2" />
                Tool Inventory
              </button>
            </div>
          </div>
        )}
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}
