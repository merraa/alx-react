import { fromJS } from 'immutable';

export default function getImmutableObject(obj){
    const map = fromJS(obj);
    return map;
}