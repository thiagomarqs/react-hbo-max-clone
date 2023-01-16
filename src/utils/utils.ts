export const expandRuntime = (runtime: number): { hours: number, minutes: number } => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return { hours: hours, minutes : minutes };
}

export const runtimeToString = (runtime: number) => {
  const { hours, minutes } = expandRuntime(runtime);
  return `${hours} HR ${minutes} MIN`;
}