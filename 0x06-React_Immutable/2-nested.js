export default function accessImmutableObject(object, array) {
  return Map(object).get(array[0])[array[1]];
}