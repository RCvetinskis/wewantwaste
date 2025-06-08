"use client";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { IWaste } from "@/actions/api/we-want-waste-requests";
import { cn } from "@/lib/utils";
import { subabaseImageUrl } from "@/lib/constants";
import Image from "next/image";
import { Check, TriangleAlert } from "lucide-react";
import WasteDrawer from "./waste-drawer";
import { useState } from "react";

type Props = {
  item: IWaste;
  selected: boolean;
  onSelect: (id: number | null) => void;
};

const WasteItem = ({ item, selected, onSelect }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    if (selected) {
      onSelect(null);
      setIsDrawerOpen(false);
    } else {
      onSelect(item.id);
      setIsDrawerOpen(true);
    }
  };
  return (
    <div className="group/card">
      <WasteDrawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        selectedItem={selected ? item : null}
      />
      <div
        onClick={handleClick}
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 transition duration-300",
          selected && "ring-2 ring-primary ring-offset-2 shadow-primary/40"
        )}
      >
        <Image src={subabaseImageUrl} alt={"Waste Image"} fill priority />

        {!item.allowed_on_road && (
          <div className="absolute bottom-8 right-1">
            <Badge variant="warning">
              <TriangleAlert />
              <span>Not Allowed On The Road</span>
            </Badge>
          </div>
        )}

        <div className="absolute w-full h-full top-0 left-0 transition duration-500 group-hover/card:bg-black opacity-10"></div>
        {selected && (
          <div className="absolute z-15 top-0 right-0">
            <Badge>
              <Check />
            </Badge>
          </div>
        )}
        <div className="z-10">
          <Badge>{item.size} Yards</Badge>
        </div>

        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {item.size} Yard Skip
          </h1>
          <p className="font-normal text-sm text-gray-100 relative z-10 my-4">
            {item.hire_period_days} day hire period
          </p>

          <p className="font-normal text-sm text-gray-100 relative z-10 my-4">
            <Badge>
              <span>&euro;</span>
              {item.price_before_vat}
            </Badge>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WasteItem;

export const WasteItemSkeleton = () => {
  return (
    <div className=" h-96 rounded-md  dark:bg-primary-foreground bg-gray-300  flex flex-col justify-between p-4">
      <Skeleton className="w-20 h-6  bg-primary rounded" />

      <div className="mt-4 flex flex-col gap-3">
        <Skeleton className="w-32 h-6 bg-primary rounded" />
        <Skeleton className="w-20 h-6 bg-primary rounded" />
        <Skeleton className="w-full bg-primary h-8 rounded mb-2" />
      </div>
    </div>
  );
};
