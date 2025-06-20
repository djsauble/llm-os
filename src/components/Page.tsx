import type { ReactNode } from 'react';

interface PageProps {
  sidebar: ReactNode;
  children: ReactNode;
}

function Page({ sidebar, children }: PageProps) {
  return (
    <div className="flex max-lg:flex-col lg:flex-row h-screen">
      {sidebar}
      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Page;
