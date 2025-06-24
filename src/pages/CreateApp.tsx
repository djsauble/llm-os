import { useNavigate } from 'react-router-dom';
import { Toolbar } from '@base-ui-components/react/toolbar';
import { Check } from 'react-feather';
import Sidebar from '../components/Sidebar';
import Modes from '../components/Modes';
import Page from '../components/Page';
import TaskFlow from '../components/TaskFlow';
import { usePersistedMode } from '../hooks/usePersistedMode';
import { useAppContext } from '../context/AppContext';
import { mockTaskFlowData } from '../schemas/taskFlow';

function CreateApp() {
  const [selectedMode, setSelectedMode] = usePersistedMode();
  const navigate = useNavigate();
  const { createApp } = useAppContext();

  const handleCreateApp = () => {
    const newApp = createApp('New App', mockTaskFlowData);
    navigate(`/app/${newApp.id}`);
  };

  return (
    <Page
      sidebar={<Sidebar />}
      modes={<Modes value={selectedMode} onChange={setSelectedMode} />}
    >
      <div className="flex-1 w-full h-full relative">
        {/* Action button for create page */}
        <Toolbar.Root className="absolute top-4 right-4 z-10">
          <Toolbar.Button 
            onClick={handleCreateApp}
            className="btn-icon-primary"
          >
            <Check className="w-4 h-4" />
          </Toolbar.Button>
        </Toolbar.Root>

        <TaskFlow data={mockTaskFlowData} />
      </div>
    </Page>
  );
}

export default CreateApp;
