import { PAGE_LOADED } from "../actions/ui";
import * as commentsActions from '../actions/comments';

const pageLoadedFlow = ({ log }) => ({ dispatch }) => next => action => {
    next(action);

    if (action.type === PAGE_LOADED) {
        log('page loaded');
        dispatch(commentsActions.loadComments);
    }
};

export default [
    pageLoadedFlow
];