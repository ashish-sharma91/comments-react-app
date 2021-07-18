export const LOAD_COMMENTS = '[comments] load';
export const LOAD_COMMENTS_SUCCESS = '[comments] load success';
export const LOAD_COMMENTS_FAILURE = '[comments] load failure';
export const SET_COMMENTS = '[comments] set';
export const PUT_COMMENT = '[comments] put';

export const loadComments = {
    type: LOAD_COMMENTS,
};

export const loadCommentsSuccess = comments => ({
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments,
});

export const loadCommentsFailure = error => ({
    type: LOAD_COMMENTS_FAILURE,
    payload: error,
});

export const setComments = comments => ({
    type: SET_COMMENTS,
    payload: comments,
});

export const putComment = comment => ({
    type: PUT_COMMENT,
    payload: comment,
});