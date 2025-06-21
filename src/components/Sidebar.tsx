import { Radio } from '@base-ui-components/react/radio';
import { RadioGroup } from '@base-ui-components/react/radio-group';
import { Command } from 'react-feather';

function Sidebar() {
  return (
    <div className="bg-slate-50 p-4 flex flex-col">
      <RadioGroup
        defaultValue="home"
        className="flex md:flex-col max-md:space-x-4 md:space-y-4 items-center"
      >
        <Radio.Root value="home" aria-label="Home" className="btn-icon p-4">
          <Command className="w-6 h-6" />
        </Radio.Root>
      </RadioGroup>
    </div>
  );
}

export default Sidebar;
