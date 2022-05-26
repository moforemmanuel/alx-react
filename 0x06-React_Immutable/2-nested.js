export default function accessImmutableObject(object, array) {
  return object[array[0]][array[1]];
}