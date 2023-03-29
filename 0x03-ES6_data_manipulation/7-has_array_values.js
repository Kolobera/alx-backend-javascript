export default function hasValuesFromArray(set, arr) {
  return Array.isArray(arr) && arr.every((item) => set.has(item));
}
