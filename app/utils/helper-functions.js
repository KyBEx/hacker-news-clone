export function convertDateString(unixString) {
  const date = new Date(unixString * 1000);
  return date.toLocaleDateString();
}
