import Omnibar from '../components/Omnibar';
import Sidebar from '../components/Sidebar';
import Modes from '../components/Modes';
import Page from '../components/Page';
import { usePersistedMode } from '../hooks/usePersistedMode';

function Home() {
  const [selectedMode, setSelectedMode] = usePersistedMode();

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
