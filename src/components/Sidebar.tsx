import { Radio } from '@base-ui-components/react/radio';
import { RadioGroup } from '@base-ui-components/react/radio-group';
import { Command } from 'react-feather';

function Sidebar() {
  return (
    <div className="bg-slate-50 max-lg:p-2 lg:p-4 flex flex-col">
      <RadioGroup
        defaultValue="home"
        className="flex lg:flex-col max-lg:space-x-2 lg:space-y-4 items-center"
      >
        <Radio.Root value="home" aria-label="Home" className="btn-icon max-lg:p-2 lg:p-4">
          <Command className="max-lg:w-4 max-lg:h-4 lg:w-6 lg:h-6" />
        </Radio.Root>
      </RadioGroup>
    </div>
  );
}

export default Sidebar;
