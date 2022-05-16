import ApiHandler from '@/services/ApiHandler';
import { RootStore } from '@/store/types';
import { keyBy } from 'lodash';
import { GetState, SetState } from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const fetchArticles = async (set: SetState<RootStore>, get: GetState<RootStore>) => {
  set({ isLoadingArticles: true });

  try {
    const articles = await ApiHandler.doCall(() => ApiHandler.ArticlesAPI.fetchArticles());
    set({
      articleDict: {
        ...get().articleDict,
        ...keyBy(articles, 'id'),
      },
    });
  } finally {
    set({ isLoadingArticles: false });
  }
};
