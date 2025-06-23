import Sidebar from '../components/Sidebar';
import Modes from '../components/Modes';
import Page from '../components/Page';
import { usePersistedMode } from '../hooks/usePersistedMode';

function Definition() {
  const [selectedMode, setSelectedMode] = usePersistedMode();

  return (
    <Page
      sidebar={<Sidebar />}
      modes={<Modes value={selectedMode} onChange={setSelectedMode} />}
    >
      <div className="flex-1 w-full flex flex-col gap-4 items-center justify-center h-full">
        <h1>Task definition</h1>
      </div>
    </Page>
  );
}

export default Definition;
