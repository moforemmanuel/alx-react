import { Map } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  return Map(object).getIn(array[0], array[1]);
}
