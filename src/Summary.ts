import { MatchData } from "./MatchData";
import { totalNumAnalysis } from "./analyzers/totalNumAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): number;
}

export interface OutputTarget {
  print(report: MatchData[]): void;
}

export class Summary {
  static totalNumAnalysisWithHtmlReport(matches: MatchData[]) {
    return new Summary(new totalNumAnalysis(matches), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this, this.outputTarget.print(matches);
  }
}
