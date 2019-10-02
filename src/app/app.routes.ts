import { Routes } from "@angular/router";
export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./blogs/blogs.module").then(module => module.BlogsModule)
  },
  {
    path: "blog-details/:blogId",
    loadChildren: () =>
      import("./blog-details/blog-details.module").then(
        module => module.BlogDetailsModule
      )
  }
];
