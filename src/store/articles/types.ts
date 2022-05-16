import { Article } from '@/api';

export interface ArticleState {
  articleDict: Record<number, Article>;

  isLoadingArticles: boolean;

  fetchArticles: () => Promise<void>;
}
