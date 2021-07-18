import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../application/selectors/comments';
import { pageLoaded } from '../application/actions/ui';
import { putComment } from '../application/actions/comments';
import { getLoading } from '../application/selectors/ui';

export default () => {
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const loading = useSelector(getLoading);
    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);
    return (
        <>
            <h1>Comments</h1>
            {loading ? 'Loading comments...' : (
                <ul>
                    {comments.map(comments => (
                        <li
                            key={comments.id}
                            style={{
                                textDecoration: comments.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => dispatch(putComment({ ...comments, completed: !comments.completed }))}
                        >
                            <strong>
                                {comments.name}
                            </strong>
                            <div>
                                {comments.body}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};