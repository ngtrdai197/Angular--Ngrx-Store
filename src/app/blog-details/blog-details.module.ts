import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogDetailsComponent } from "./blog-details.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: BlogDetailsComponent }];

@NgModule({
  declarations: [BlogDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BlogDetailsModule {}
