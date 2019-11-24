import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { Routes, RouterModule } from '@angular/router'
import { BlogItemComponent } from './blog-item/blog-item.component'
import { BlogListComponent } from './blog-list/blog-list.component'
import { reducers } from './store'

const components = [BlogItemComponent, BlogListComponent]

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    StoreModule.forFeature('blogs', reducers),
    RouterModule.forChild(routes),
  ],
})
export class BlogsModule {}
