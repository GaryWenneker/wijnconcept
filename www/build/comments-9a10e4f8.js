import { s as standardReq } from './utils-54e66ad4.js';

// We COULD authenticate comment lists, but the only
// value that would change would be the `following` prop
// in authors' profiles, which doesn't show up for the user,
// so I preferred not using it
const getCommentsList = async (slug) => {
  const commentList = await standardReq({
    path: `articles/${slug}/comments`,
    method: 'GET',
  });
  const { comments, errors } = commentList;
  return {
    success: Array.isArray(comments) ? true : false,
    comments,
    errors,
  };
};
// Deleting an comment either returns an error or an empty
// object for success.
const deleteComment = async (slug, id, token) => {
  const commentInfo = await standardReq({
    path: `articles/${slug}/comments/${id}`,
    method: 'DELETE',
    token,
  });
  const { errors } = commentInfo;
  return {
    success: typeof errors === 'undefined',
    errors,
  };
};
const createComment = async (slug, body, token) => {
  const commentInfo = await standardReq({
    path: `articles/${slug}/comments`,
    method: 'POST',
    token,
    body: JSON.stringify({ comment: { body } }),
  });
  const { comment, errors } = commentInfo;
  return {
    success: comment && comment.id ? true : false,
    comment,
    errors,
  };
};

export { createComment as c, deleteComment as d, getCommentsList as g };
