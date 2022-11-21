import { readFileSync } from "fs";

export class MdFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((el: string): string[] => el.split("|"));
  }
}
