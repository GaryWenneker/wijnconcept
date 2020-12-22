import { s as standardReq } from './utils-54e66ad4.js';

const handleProfileReturn = ({ profile, errors }) => {
  return {
    success: profile && profile.username ? true : false,
    profile,
    errors,
  };
};
const getProfile = async (username, token) => {
  const profileInfo = await standardReq({
    path: `profiles/${username}`,
    method: 'GET',
    token,
  });
  return handleProfileReturn(profileInfo);
};
const followProfile = async (username, token, unfollow) => {
  const profileInfo = await standardReq({
    path: `profiles/${username}/follow`,
    method: unfollow ? 'DELETE' : 'POST',
    token,
  });
  return handleProfileReturn(profileInfo);
};

export { followProfile as f, getProfile as g };
