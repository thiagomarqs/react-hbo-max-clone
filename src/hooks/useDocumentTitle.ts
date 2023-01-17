export const useDocumentTitle = (): [string, (title: string) => void] => {
  const title = document.title;
  const setTitle = (title: string) => document.title = title;
  return [title, setTitle];
}