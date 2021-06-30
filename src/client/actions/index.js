import articleItems from '../../items';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = () => async (dispatch) => {
  const articleList = articleItems;
  dispatch({
    type: FETCH_ARTICLES,
    payload: articleList,
  });
};
