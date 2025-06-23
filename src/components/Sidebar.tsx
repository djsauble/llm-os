import { NavigationMenu } from '@base-ui-components/react/navigation-menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Command, Plus } from 'react-feather';

function Sidebar() {
  const location = useLocation();

  return (
    <NavigationMenu.Root className="bg-slate-50 p-4 flex flex-col">
      <NavigationMenu.List className="flex md:flex-col max-md:space-x-4 md:space-y-4 items-center">
        <NavigationMenu.Item className={`${location.pathname === '/' ? 'btn-icon-secondary-active' : 'btn-icon-secondary'}`}>
          <NavigationMenu.Link
            render={<RouterLink to="/" />}
            aria-label="Home"
          >
            <Command className="w-6 h-6" />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className={`${location.pathname === '/definition' ? 'btn-icon-secondary-active' : 'btn-icon-secondary'}`}>
          <NavigationMenu.Link
            render={<RouterLink to="/definition" />}
            aria-label="Task Definition"
          >
            <Plus className="w-6 h-6" />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default Sidebar;
