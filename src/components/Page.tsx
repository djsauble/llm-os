import type { ReactNode } from 'react';

interface PageProps {
  sidebar: ReactNode;
  modes: ReactNode;
  children: ReactNode;
}

function Page({ sidebar, modes, children }: PageProps) {
  return (
    <div className="flex max-md:flex-col md:flex-row h-screen">
      {sidebar}
      <div className="flex flex-col gap-4 h-full w-full p-4 items-center">
        <div className="flex-1 w-full">
          {children}
        </div>
        <div className="absolute bottom-0 p-4 flex">
          {modes}
        </div>
      </div>
    </div>
  );
}

export default Page;
