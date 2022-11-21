import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";

export class totalNumAnalysis implements Analyzer {
  constructor(matches: MatchData[]) {}

  run(matches: MatchData[]): number {
    return matches.length;
  }
}
