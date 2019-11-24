import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import * as fromStore from '../store'
import { Blog } from '@blog/blogs/models/blog.interface'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  constructor(private store: Store<fromStore.PostsState>) {}

  blogs: Blog[] = []
  ngOnInit() {
    this.store.select(fromStore.getAllBlogs).subscribe(data => {
      this.blogs = data
    })
  }
}
