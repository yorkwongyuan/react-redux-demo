import { combineReducers } from 'redux';
import counter from './couter';
// 合并多个reducers，防止当项目过大的时候出现reducers臃肿
const reducers = combineReducers({
    counter
});

export default reducers;