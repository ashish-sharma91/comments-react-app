import { LOAD_COMMENTS_SUCCESS, SET_COMMENTS } from "../actions/comments";

const initialState = {
    allComments: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS_SUCCESS:
            return { allComments: action.payload, error: null };
        case SET_COMMENTS:
            return { allComments: action.payload, error: null };
        default:
            return state;
    }
};

export default reducer;