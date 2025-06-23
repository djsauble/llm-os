import { Link, useLocation } from 'react-router-dom';
import { Command, Plus } from 'react-feather';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-slate-50 p-4 flex flex-col">
      <nav className="flex md:flex-col max-md:space-x-4 md:space-y-4 items-center">
        <Link
          to="/"
          aria-label="Home"
          className={`btn-icon p-4 ${location.pathname === '/' ? 'bg-gray-200 text-gray-800 shadow-inner border-gray-300' : ''}`}
        >
          <Command className="w-6 h-6" />
        </Link>
        <Link
          to="/definition"
          aria-label="Task Definition"
          className={`btn-icon p-4 ${location.pathname === '/definition' ? 'bg-gray-200 text-gray-800 shadow-inner border-gray-300' : ''}`}
        >
          <Plus className="w-6 h-6" />
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
