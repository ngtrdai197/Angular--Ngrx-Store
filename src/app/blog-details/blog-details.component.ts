import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import * as fromStore from '@blog/blogs/store'
import { LoadBlogWithId } from '@blog/blogs/store/actions/blog.action'
import { Subscription } from 'rxjs'
import { Blog } from '@blog/blogs/models/blog.interface'

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit, OnDestroy {
  blog: Blog
  subscription: Subscription
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromStore.PostsState>,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.store.dispatch(new LoadBlogWithId(paramMap.get('blogId')))
      this.subscription = this.store
        .select(fromStore.getBlogWithId)
        .subscribe(data => {
          this.blog = data
        })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
