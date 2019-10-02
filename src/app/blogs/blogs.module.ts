import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { BlogItemComponent } from "./blog-item/blog-item.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { reducers } from "./store";
import { Routes, RouterModule } from "@angular/router";

const components = [BlogItemComponent, BlogListComponent];

const routes: Routes = [
  {
    path: "",
    component: BlogListComponent
  }
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    StoreModule.forFeature("blogs", reducers),
    RouterModule.forChild(routes)
  ]
})
export class BlogsModule {}
