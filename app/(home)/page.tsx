import { getWastes, IWaste } from "@/actions/api/we-want-waste-requests";
import WasteList from "@/components/waste/waste-list";

const Page = async () => {
  const data = (await getWastes()) as IWaste[];
  if (data.length === 0) {
    return (
      <div className="grid items-center justify-center h-[80svh] text-2xl">
        No wastes found.
      </div>
    );
  }
  return (
    <div>
      <WasteList list={data} />
    </div>
  );
};

export default Page;
