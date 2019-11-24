import { Action } from '@ngrx/store'
import { Blog } from '@blog/blogs/models/blog.interface'

export const LOAD_BLOGS = '[Blog] Load Blogs'
export const LOAD_BLOGS_FAIL = '[Blog] Load Blogs Faild'
export const LOAD_BLOGS_SUCCESS = '[Blog] Load Blogs Success'
export const LOAD_BLOGS_WITH_ID = '[Blog] Load Blog With Id'

export class LoadBlogs implements Action {
  readonly type = LOAD_BLOGS
}

export class LoadBlogsFail implements Action {
  readonly type = LOAD_BLOGS_FAIL
  constructor(public payload: any) {}
}

export class LoadBlogsSuccess implements Action {
  readonly type = LOAD_BLOGS_SUCCESS
  constructor(public payload: Blog[]) {}
}

export class LoadBlogWithId implements Action {
  readonly type = LOAD_BLOGS_WITH_ID
  constructor(public payload: string) {}
}

export type BlogsAction =
  | LoadBlogs
  | LoadBlogsSuccess
  | LoadBlogsFail
  | LoadBlogWithId
