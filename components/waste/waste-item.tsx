"use client";
import { Badge } from "@/components/ui/badge";
import { IWaste } from "@/actions/api/we-want-waste-requests";
import { cn } from "@/lib/utils";
import { subabaseImageUrl } from "@/lib/constants";
import Image from "next/image";
import { Check } from "lucide-react";

type Props = {
  item: IWaste;
  selected: boolean;
  onSelect: (id: number) => void;
};

const WasteItem = ({ item, selected, onSelect }: Props) => {
  return (
    <div className="group/card">
      <div
        onClick={() => onSelect(item.id)}
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 transition duration-300",
          selected && "ring-2 ring-primary ring-offset-2 shadow-primary/40"
        )}
      >
        <Image src={subabaseImageUrl} alt={"Waste Image"} fill priority />
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
