import { fromJS, Map } from "immutable";
export default function getImmutableObject(object) {
  return Map(object);
};
