export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanum with hyphens
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
}
