import { splitString } from "./utils";
import { MatchCategory } from "./MatchCategory";
import { MatchData } from "./MatchData";
import { MdFileReader } from "./MdFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromMd(filename: string): MatchReader {
    return new MatchReader(new MdFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(matchCategory: MatchCategory): void {
    this.reader.read();
    this.matches = this.reader.data
      .slice(0, -1)
      .map((el: string[]): MatchData => {
        return {
          title: splitString(el[1]).at(0) || "",
          url: splitString(el[1]).at(1) || "",
          excerpt: el[2],
          logoImage: "",
          category: matchCategory as MatchCategory,
          developer: "",
        };
      });
  }
}
