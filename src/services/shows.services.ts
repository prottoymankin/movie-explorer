import type { Show } from "../types/show.types";

const BASE_URL = import.meta.env.VITE_TVMAZE_BASE_URL as string;

export const getShows = async (): Promise<Show[]> => {
  const response = await fetch(`${BASE_URL}/shows`);
  
  if (!response.ok) {
    throw new Error ("Failed to fetch shows data.");
  }

  return response.json();
};