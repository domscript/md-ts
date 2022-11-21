import { MatchCategory } from "./MatchCategory";

export interface MatchData {
  title: string;
  url: string;
  excerpt: string;
  logoImage: string;
  category: MatchCategory;
  developer: string;
}
