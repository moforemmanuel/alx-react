export default function accessImmutableObject(object, array) {
  return object.get(array[0]).get(array[1]);
}