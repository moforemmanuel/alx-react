import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  return Map(object).getIn(array);
}
