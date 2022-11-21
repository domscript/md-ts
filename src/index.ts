import { MatchReader } from "./MatchReader";
import { MatchCategory } from "./MatchCategory";

import { Summary } from "./Summary";

const matchReader = MatchReader.fromMd("first.md");
matchReader.load(MatchCategory.Others);
console.log(matchReader.matches);
const summary = Summary.totalNumAnalysisWithHtmlReport(matchReader.matches);
summary.buildAndPrintReport(matchReader.matches);
