export default function accessImmutableObject(object, array) {
  return object.get(array[0]).map(data => data.array[1]);
}