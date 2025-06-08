"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { IWaste } from "@/actions/api/we-want-waste-requests";
import { Badge } from "@/components/ui/badge";
import { ChevronUp } from "lucide-react";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedItem: IWaste | null;
};

const WasteDrawer = ({ isOpen, onOpenChange, selectedItem }: Props) => {
  const handleContinue = () => {
    toast.error(`Oops! Sorry, currently not available right now.`, {
      duration: 1000,
      closeButton: true,
    });
  };
  return (
    <>
      {/* floating btn to open drawer back */}
      {!isOpen && selectedItem && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <Button
            variant="outline"
            className="rounded-full p-2 h-auto shadow-lg"
            onClick={() => onOpenChange(true)}
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      )}

      <Drawer open={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent className="max-w-[1200px] mx-auto min-h-[200px]">
          <DrawerHeader className="pb-1">
            <DrawerDescription>
              Imagery and information shown throughout this website may not
              reflect the exact shape or size specification, colours may vary,
              options and/or accessories may be featured at additional cost.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 py-0 flex items-center gap-2">
            <DrawerTitle>{selectedItem?.size} Yard Skip</DrawerTitle>

            <Badge>
              <span>&euro;</span>
              {selectedItem?.price_before_vat}
            </Badge>
          </div>

          <DrawerFooter className="flex flex-row items-end justify-end pt-0">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button onClick={handleContinue}>Continue</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default WasteDrawer;
