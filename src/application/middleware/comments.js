import { loadCommentsFailure, loadCommentsSuccess, LOAD_COMMENTS, PUT_COMMENT, setComments } from "../actions/comments";
import * as uiActions from '../actions/ui';

const loadCommentsFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_COMMENTS) {
        try {
            dispatch(uiActions.setLoading(true));
            const comments = await api.comments.getAll();
            dispatch(loadCommentsSuccess(comments));
            dispatch(uiActions.setLoading(false));
        } catch (error) {
            dispatch(loadCommentsFailure(error));
        }
    }
};

const putCOMMENTFlow = () => ({ dispatch, getState }) => next => action => {

    if (action.type === PUT_COMMENT) {
        const oldCommentsClone = getState().comments.allComments.map(COMMENT => ({ ...COMMENT }));

        const newCOMMENT = action.payload;

        const index = oldCommentsClone.findIndex(COMMENT => COMMENT.id === newCOMMENT.id);

        oldCommentsClone[index] = newCOMMENT;

        dispatch(setComments(oldCommentsClone));
    }

    next(action);
};

export default [
    loadCommentsFlow,
    putCOMMENTFlow,
];