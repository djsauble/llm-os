import { Input } from '@base-ui-components/react/input';
import { MessageCircle, Mic, Video } from 'react-feather';
import { Radio } from '@base-ui-components/react/radio';
import { RadioGroup } from '@base-ui-components/react/radio-group';

export default function Omnibar() {
  return (
    <div className="border lg:px-4 max-lg:px-2 lg:py-2 max-lg:py-1 border-slate-400 bg-slate-50 lg:w-150 max-lg:w-100 flex items-center gap-2">
      <Input placeholder="What do you want to do?" className="flex-1 lg:text-2xl" />
      <RadioGroup defaultValue="chat" className="flex gap-1">
        <Radio.Root aria-label="Chat mode" value="chat" className="btn-icon lg:p-2 max-lg:p-1">
          <MessageCircle className="max-lg:w-3 max-lg:h-3 lg:w-5 lg:h-5" />
        </Radio.Root>
        <Radio.Root aria-label="Audio mode" value="audio" className="btn-icon lg:p-2 max-lg:p-1">
          <Mic className="max-lg:w-3 max-lg:h-3 lg:w-5 lg:h-5" />
        </Radio.Root>
        <Radio.Root aria-label="Video mode" value="video" className="btn-icon lg:p-2 max-lg:p-1">
          <Video className="max-lg:w-3 max-lg:h-3 lg:w-5 lg:h-5" />
        </Radio.Root>
      </RadioGroup>
    </div>
  );
}
