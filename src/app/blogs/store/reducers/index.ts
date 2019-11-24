import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'
import * as fromBlogs from './blog.reducer'

export interface PostsState {
  blogs: fromBlogs.BlogState
}

export const reducers: ActionReducerMap<PostsState> = {
  blogs: fromBlogs.reducer,
}

export const getPostsState = createFeatureSelector<PostsState>('blogs')

export const getBlogState = createSelector(
  getPostsState,
  (state: PostsState) => state.blogs,
)

export const getAllBlogs = createSelector(getBlogState, fromBlogs.getBlogs)
export const getBlogsLoading = createSelector(
  getBlogState,
  fromBlogs.getBlogsLoading,
)
export const getBlogsLoaded = createSelector(
  getBlogState,
  fromBlogs.getBlogsLoaded,
)

export const getBlogWithId = createSelector(
  getBlogState,
  fromBlogs.getBlogWithId,
)
