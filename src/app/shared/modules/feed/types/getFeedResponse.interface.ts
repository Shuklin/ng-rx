import {ArticleInterface} from "../../../types/article.interface";

export interface GetFeedResponseInterface {
  articles: Array<ArticleInterface>,
  articlesCount: number
}
