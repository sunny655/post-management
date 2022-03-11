import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser, faEdit, faHome } from '@fortawesome/free-solid-svg-icons';
import { PostDetailService } from './post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  providers: [PostDetailService]
})
export class PostDetailComponent implements OnInit {

  faUser = faUser;
  faEdit = faEdit;
  faHome = faHome;
  postId;
  postData;
  comments;
  isEdit = false;

  constructor(
    private activatedRouteService: ActivatedRoute,
    private postDetailService: PostDetailService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRouteService.data.subscribe(data => {
      this.postId = this.activatedRouteService.snapshot.params['id'];
    });
    this.getPost();
    this.getPostComment();
  }

  /**
    * @ngdoc method
    * @name getPost
    * @description
    * fetch post
  */
  getPost(){
    this.postDetailService.fetchPost(this.postId).then(data => {
      this.postData = data;
    }).catch(error => {alert("Getting Error while fetching post data.")})
  }

  /**
    * @ngdoc method
    * @name getPostComment
    * @description
    * fetch post comments
  */
  getPostComment(){
    this.postDetailService.fetchPostComments(this.postId).then(data => {
      this.comments = data;
    }).catch(error => {alert("Getting Error while fetching post data.")})
  }

}
