import Sidebar from '../components/Sidebar';
import Modes from '../components/Modes';
import Page from '../components/Page';
import TaskFlow from '../components/TaskFlow';
import { usePersistedMode } from '../hooks/usePersistedMode';

function Definition() {
  const [selectedMode, setSelectedMode] = usePersistedMode();

  return (
    <Page
      sidebar={<Sidebar />}
      modes={<Modes value={selectedMode} onChange={setSelectedMode} />}
    >
      <div className="flex-1 w-full h-full">
        <TaskFlow />
      </div>
    </Page>
  );
}

export default Definition;
