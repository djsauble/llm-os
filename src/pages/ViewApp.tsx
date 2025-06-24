import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from '@base-ui-components/react/menu';
import { MoreVertical, Trash2 } from 'react-feather';
import Sidebar from '../components/Sidebar';
import Modes from '../components/Modes';
import Page from '../components/Page';
import TaskFlow from '../components/TaskFlow';
import { usePersistedMode } from '../hooks/usePersistedMode';
import { useAppContext } from '../context/AppContext';

function ViewApp() {
  const [selectedMode, setSelectedMode] = usePersistedMode();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getApp, deleteApp } = useAppContext();
  
  const app = id ? getApp(id) : null;
  const taskFlowData = app?.taskFlow;

  const handleDelete = () => {
    if (id && app) {
      deleteApp(id);
      navigate('/');
    }
  };

  return (
    <Page
      sidebar={<Sidebar />}
      modes={<Modes value={selectedMode} onChange={setSelectedMode} />}
    >
      <div className="flex-1 w-full h-full relative">
        <Menu.Root>
          <Menu.Trigger className="btn-icon-secondary absolute top-4 right-4 z-10">
            <MoreVertical className="w-4 h-4" />
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner>
              <Menu.Popup className="bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-[120px]">
                <Menu.Item 
                  className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer flex items-center gap-2 w-full"
                  onClick={handleDelete}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>

        {taskFlowData && <TaskFlow data={taskFlowData} />}
      </div>
    </Page>
  );
}

export default ViewApp;
