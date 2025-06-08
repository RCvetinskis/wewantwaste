import StatusTracker from "./status-tracker";
import ToggleTheme from "./toggle-theme";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-48 rounded-r-md dark:shadow-primary shadow-md p-6 flex flex-col">
      <StatusTracker />

      <div className="mt-auto border-t-2 pt-4">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default SideBar;
