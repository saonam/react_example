
import { combineReducers } from 'redux';
import place from './place'
import site from './site'

const reducers = combineReducers({
    place: place,
    site: site
});
export default reducers;