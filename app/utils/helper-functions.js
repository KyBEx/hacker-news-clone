export function convertDateString(unixString) {
  const date = new Date(unixString * 1000);
  return date.toLocaleDateString();
}

export function getIdFromURL(string) {
  return string.slice(string.indexOf("=") + 1);
}
