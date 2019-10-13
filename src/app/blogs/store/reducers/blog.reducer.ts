import { Blog } from "../../models/blog.interface";
import * as fromBlogsAcion from "../actions/blog.action";

export interface BlogState {
  data: Blog[];
  blog: any;
  loaded: boolean;
  loading: boolean;
}

export const initialState: BlogState = {
  data: [
    {
      images: [],
      title: "Define your goals.",
      content:
        "If you don’t take anything else away from this article, take away goal-setting. Having a clearly defined goal will set you up to push through all the other steps, all the hours of writing, and all the obstacles bound to show up.",
      createdAt: "2019-09-06T04:14:31.719Z",
      updatedAt: "2019-09-06T04:14:31.719Z",
      id: "5d71dd27925c9c315080c864"
    },
    {
      images: [],
      title: "Be specific with your goals.",
      content:
        "Simply saying “get more traffic” isn’t enough. You need to include how much traffic you want and in what timeframe. A better goal would be “Increase sales by 15% in three months”. Very specific.",
      createdAt: "2019-09-06T04:15:01.587Z",
      updatedAt: "2019-09-06T04:15:01.587Z",
      id: "5d71dd45925c9c315080c865"
    },
    {
      images: [],
      title: "Create a blog content calendar.",
      content:
        "A content calendar keeps you on track and creates a system to ensure your content is always top-notch and published on time. The best calendars also have social sharing and email marketing info baked in to make things organized and easy.",
      createdAt: "2019-09-06T04:15:44.058Z",
      updatedAt: "2019-09-06T04:15:44.058Z",
      id: "5d71dd70925c9c315080c866"
    },
    {
      images: [],
      title: "Build amazing content.",
      content:
        "While it may be tempting to fire off your blog posts as they come to mind, having a written blog content strategy will save you hours of headaches. Plus, you’ll see way more success.",
      createdAt: "2019-09-06T04:16:08.274Z",
      updatedAt: "2019-09-06T04:16:08.274Z",
      id: "5d71dd88925c9c315080c867"
    },
    {
      images: [],
      title: "jQuery CDN.",
      content:
        "Many users already have downloaded jQuery from Google or Microsoft when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.",
      createdAt: "2019-09-08T15:09:30.045Z",
      updatedAt: "2019-09-08T15:09:30.045Z",
      id: "5d7519aa3b3efc3540df6332"
    },
    {
      images: [],
      title: "One big advantage.",
      content:
        "It is good practice to wait for the document to be fully loaded and ready before working with it. This also allows you to have your JavaScript code before the body of your document, in the head section.",
      createdAt: "2019-09-08T15:19:35.784Z",
      updatedAt: "2019-09-08T15:19:35.784Z",
      id: "5d751c073b3efc3540df6333"
    },
    {
      images: [],
      title: "jQuery DOM Manipulation.",
      content:
        "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.",
      createdAt: "2019-09-08T15:27:06.162Z",
      updatedAt: "2019-09-08T15:27:06.162Z",
      id: "5d751dcad78fcc33f822a6ea"
    },
    {
      images: [],
      title: "jQuery DOM Manipulation.",
      content:
        "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.",
      createdAt: "2019-09-08T15:59:34.191Z",
      updatedAt: "2019-09-08T15:59:34.191Z",
      id: "5d752566d78fcc33f822a6eb"
    },
    {
      images: [],
      title: "jQuery DOM Manipulation.",
      content:
        "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.",
      createdAt: "2019-09-08T15:59:39.821Z",
      updatedAt: "2019-09-08T15:59:39.821Z",
      id: "5d75256bd78fcc33f822a6ec"
    }
  ],
  blog: {},
  loaded: false,
  loading: false
};

export const reducer = (
  state = initialState,
  action: fromBlogsAcion.BlogsAction
): BlogState => {
  switch (action.type) {
    case fromBlogsAcion.LOAD_BLOGS:
      return { ...state, loading: true };
    case fromBlogsAcion.LOAD_BLOGS_FAIL:
      return { ...state, loaded: false, loading: false };
    case fromBlogsAcion.LOAD_BLOGS_SUCCESS:
      return { ...state, loading: false, loaded: true };
    case fromBlogsAcion.LOAD_BLOGS_WITH_ID:
      return {
        ...state,
        blog: state.data.find(x => x.id === action.payload)
      };
    default:
      return state;
  }
};

export const getBlogsLoading = (state: BlogState) => state.loading;
export const getBlogsLoaded = (state: BlogState) => state.loaded;
export const getBlogs = (state: BlogState) => state.data;
export const getBlogWithId = (state: BlogState) => state.blog;
