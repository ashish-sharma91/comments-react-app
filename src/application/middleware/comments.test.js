import { loadCommentsSuccess, LOAD_COMMENTS } from '../actions/comments';
import commentsMiddleware from './comments';

describe('comments middleware', () => {
    describe('load comments flow', () => {
        const [loadCommentsFlow] = commentsMiddleware;

        const dummyComment = {
            id: '1',
            title: 'Dummy comment',
            completed: true,
        };
        const api = {
            comments: {
                getAll: jest.fn().mockImplementationOnce(() => new Promise((resolve) => resolve([dummyComment])))
            }
        };
        const dispatch = jest.fn();
        const next = jest.fn();
        const action = {
            type: LOAD_COMMENTS
        };


        it('passes action to next middleware', async () => {
            await loadCommentsFlow({ api })({ dispatch })(next)(action);

            expect(next).toHaveBeenCalledWith(action);
        });

        it('calls api.comments.getAll at least once', async () => {
            await loadCommentsFlow({ api })({ dispatch })(next)(action);

            expect(api.comments.getAll).toHaveBeenCalled();
        });

        it('calls api.comments.getAll at least once', async () => {
            await loadCommentsFlow({ api })({ dispatch })(next)(action);

            expect(dispatch).toHaveBeenCalledWith(loadCommentsSuccess([dummyComment]));
        });
    });
});