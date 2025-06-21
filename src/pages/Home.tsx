import { useState } from 'react';
import Omnibar from '../components/Omnibar';
import Sidebar from '../components/Sidebar';
import Modes from '../components/Modes';
import Page from '../components/Page';
import type { Mode } from '../types';

function Home() {
  const [selectedMode, setSelectedMode] = useState<Mode>('chat');

  return (
    <Page
      sidebar={<Sidebar />}
      modes={<Modes value={selectedMode} onChange={setSelectedMode} />}
    >
      <div className="flex-1 w-full flex flex-col gap-4 items-center justify-center h-full">
        <Omnibar mode={selectedMode} />
      </div>
    </Page>
  );
}

export default Home;
