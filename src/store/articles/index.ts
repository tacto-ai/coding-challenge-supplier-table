import { fetchArticles } from '@/store/articles/thunks';
import { ArticleState } from '@/store/articles/types';
import { CustomStoreSlice } from '@/store/types';

// eslint-disable-next-line import/prefer-default-export
export const createArticleSlice: CustomStoreSlice<ArticleState> = (set, get) => ({
  articleDict: {},

  isLoadingArticles: false,

  fetchArticles: () => fetchArticles(set, get),
});
