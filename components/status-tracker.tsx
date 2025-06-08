"use client";
import { Status, statuses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Props = {
  currentStatus?: Status;
  mobile?: boolean;
};
const StatusTracker = ({
  currentStatus = "Select Skip",
  mobile = false,
}: Props) => {
  const currentIndex = statuses.findIndex((s) => s.label === currentStatus);

  const handleNavigate = (location: string) => {
    toast.error(`Oops! Sorry, "${location}" is not available right now.`, {
      duration: 1000,
      closeButton: true,
    });
  };
  return (
    <div
      className={cn(
        "flex items-start space-y-10 w-full",
        mobile ? "flex-row justify-between space-y-0 space-x-4" : "flex-col"
      )}
    >
      {statuses.map(({ label, Icon }, index) => {
        const isActive = index <= currentIndex;
        return (
          <div
            onClick={isActive ? () => handleNavigate(label) : undefined}
            key={label}
            className={cn(
              "flex items-center space-x-4 cursor-pointer select-none",
              "transition-colors duration-300",
              mobile ? "flex-col space-x-0 space-y-2" : "flex-row",
              isActive ? "text-primary dark:text-yellow-500" : "text-gray-500",
              !isActive && "cursor-not-allowed hover:text-destructive"
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border-2",
                isActive
                  ? "bg-primary border-primary dark:bg-yellow-500 text-secondary"
                  : "border-gray-300 bg-white text-gray-300"
              )}
            >
              <Icon size={18} strokeWidth={2} />
            </div>

            <span className="font-semibold text-sm">
              {mobile ? label.split(" ")[0] : label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StatusTracker;
