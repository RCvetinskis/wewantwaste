import SideBar from "@/components/side-bar";
import StatusTracker from "@/components/status-tracker";
import { WasteSkeletonList } from "@/components/waste/waste-list";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-secondary ">
      <div className="md:hidden fixed top-0 left-0 w-full bg-secondary p-4 shadow-md z-25">
        <StatusTracker mobile />
      </div>

      <aside className="hidden md:block bg-secondary">
        <SideBar />
      </aside>

      <main className="md:ml-48 mt-20 md:mt-0 p-6">
        <Suspense fallback={<WasteSkeletonList/>}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
