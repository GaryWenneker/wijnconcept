import { s as standardReq } from './utils-54e66ad4.js';

const handleUserReturn = ({ user, errors }) => {
  // The anonimousReq for user paths and methods will either
  // return an object with "user" or with "errors", no matter what
  return {
    success: user && user.username ? true : false,
    user,
    errors,
  };
};
const logUser = async (user) => {
  const userInfo = await standardReq({
    path: 'users/login',
    body: JSON.stringify({ user }),
    method: 'POST',
  });
  return handleUserReturn(userInfo);
};
const registerUser = async (user) => {
  const userInfo = await standardReq({
    path: 'users',
    body: JSON.stringify({ user }),
    method: 'POST',
  });
  return handleUserReturn(userInfo);
};
const getUser = async (token) => {
  const userInfo = await standardReq({
    path: 'user',
    method: 'GET',
    token,
  });
  return handleUserReturn(userInfo);
};
const updateUser = async (user, token) => {
  const userInfo = await standardReq({
    path: 'user',
    method: 'PUT',
    token,
    body: JSON.stringify({ user }),
  });
  return handleUserReturn(userInfo);
};

export { getUser as g, logUser as l, registerUser as r, updateUser as u };
