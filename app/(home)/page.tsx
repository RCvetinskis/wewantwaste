import { getWastes, IWaste } from "@/actions/api/we-want-waste-requests";
import WasteList from "@/components/waste/waste-list";

type Props = {};

const Page = async (props: Props) => {
  const data = (await getWastes()) as IWaste[];
  return (
    <div>
      <WasteList list={data} />
    </div>
  );
};

export default Page;
