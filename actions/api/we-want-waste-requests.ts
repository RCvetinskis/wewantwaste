"use server";
import wasteApiClient from "@/lib/api-client";

export interface IWaste {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: any;
  per_tonne_cost: any;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
export const getWastes = async () => {
  try {
    const response = await wasteApiClient.get(
      "/skips/by-location?postcode=NR32&area=Lowestoft"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
