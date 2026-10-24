export interface Show {
  id: number;
  name: string;
  language: string;
  genres: string[];
  runtime: number | null;
  premiered: string;
  rating: { average: string | null };
  image: { original: string } | null;
  summary: string | null;
};