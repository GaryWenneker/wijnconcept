import { s as standardReq } from './utils-54e66ad4.js';

const getArticleList = async ({ params, token, isFeed, }) => {
  const articleList = await standardReq({
    path: `articles${isFeed ? '/feed' : ''}${params && `?${params}`}`,
    method: 'GET',
    token,
  });
  const { articles, articlesCount, errors } = articleList;
  return {
    success: Array.isArray(articles) ? true : false,
    articles,
    articlesCount,
    errors,
  };
};
// Deleting an article either returns an error or an empty
// object for success.
const deleteArticle = async (slug, token) => {
  const articleInfo = await standardReq({
    path: `articles/${slug}`,
    method: 'DELETE',
    token,
  });
  const { errors } = articleInfo;
  return {
    success: typeof errors === 'undefined',
    errors,
  };
};
const handleSingleArticleReturn = ({ article, errors }) => {
  // Article must exist and have a slug
  return {
    success: article && article.slug ? true : false,
    article,
    errors,
  };
};
const getSingleArticle = async (slug, token) => {
  const articleInfo = await standardReq({
    path: `articles/${slug}`,
    method: 'GET',
    token,
  });
  return handleSingleArticleReturn(articleInfo);
};
const updateArticle = async ({ slug, article, token, }) => {
  const articleInfo = await standardReq({
    path: `articles/${slug}`,
    method: 'PUT',
    token,
    body: JSON.stringify({ article }),
  });
  return handleSingleArticleReturn(articleInfo);
};
const createArticle = async (article, token) => {
  const articleInfo = await standardReq({
    path: 'articles',
    method: 'POST',
    token,
    body: JSON.stringify({ article }),
  });
  return handleSingleArticleReturn(articleInfo);
};
const favoriteArticle = async (slug, token, isUnfavorite) => {
  const articleInfo = await standardReq({
    path: `articles/${slug}/favorite`,
    method: isUnfavorite ? 'DELETE' : 'POST',
    token,
  });
  return handleSingleArticleReturn(articleInfo);
};

export { getArticleList as a, createArticle as c, deleteArticle as d, favoriteArticle as f, getSingleArticle as g, updateArticle as u };
