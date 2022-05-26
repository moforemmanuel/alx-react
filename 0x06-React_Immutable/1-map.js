// import Immutable from "./node_modules/immutable/dist/immutable";
import { fromJS, Map } from "immutable";

export default function getImmutableObject(object) {
  return Map(object);
};
