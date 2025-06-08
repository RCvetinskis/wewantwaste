import {
  MapPin,
  Trash2,
  Calendar,
  CreditCard,
  CheckSquare,
  ClipboardCheck,
} from "lucide-react";

export const subabaseImageUrl =
  "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg";

export type Status =
  | "Postcode"
  | "Waste Type"
  | "Select Skip"
  | "Permit Check"
  | "Choose date"
  | "Payment";

export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>;
export const statuses: { label: Status; Icon: IconType }[] = [
  { label: "Postcode", Icon: MapPin },
  { label: "Waste Type", Icon: Trash2 },
  { label: "Select Skip", Icon: CheckSquare },
  { label: "Permit Check", Icon: ClipboardCheck },
  { label: "Choose date", Icon: Calendar },
  { label: "Payment", Icon: CreditCard },
];
