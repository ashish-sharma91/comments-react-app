import { combineReducers } from 'redux';
import ui from './ui';
import comments from './comments';

export default combineReducers({
    ui,
    comments,
});