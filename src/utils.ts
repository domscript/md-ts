export const splitString = (link: string): [string, string] => {
  const [badTitle, badUrl] = link.split("](");
  const [_, title] = badTitle.split("[");
  const [url] = badUrl.split(")");
  return [title, url];
};
