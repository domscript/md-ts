import { writeFileSync } from "fs";
import { OutputTarget } from "../Summary";
import { MatchData } from "../MatchData";

export class HtmlReport implements OutputTarget {
  print(report: MatchData[]): void {
    const html = JSON.stringify(report);

    writeFileSync("report.html", html);
  }
}
