"use client";
import { IWaste } from "@/actions/api/we-want-waste-requests";
import WasteItem, { WasteItemSkeleton } from "./waste-item";
import { useState } from "react";

type Props = {
  list: IWaste[];
};

const WasteList = ({ list }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (id: number | null) => {
    if (id === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {list.map((item) => (
        <WasteItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default WasteList;

export const WasteSkeletonList = () => {
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {skeletons.map((_, idx) => (
        <WasteItemSkeleton key={idx} />
      ))}
    </div>
  );
};
