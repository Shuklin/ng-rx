import {ProfileInterface} from "./profile.interface";

export interface ArticleInterface {
  author: ProfileInterface,
  body: string,
  title: string,
  createdAt: string,
  favorited: boolean,
  favoritesCount: number,
  slug: string,
  tagList: Array<string>,
  updatedAt: string,
  description: string
}
