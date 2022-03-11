import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/confirmation-modal/confirmation-modal.component';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostListService]
})
export class PostListComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;
  post;
  pageSize = 5;
  page = 1;
  showPost;
  isDataFetching = false;

  constructor(
    private modalService: NgbModal,
    private postService: PostListService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  /**
    * @ngdoc method
    * @name getPosts
    * @description
    * get post
  */
  getPosts(){
    this.isDataFetching = true;
    this.postService.getPosts().then(data => {
      this.post = data;
      this.post.forEach((element, index) => {
        element.srno = index + 1;
      });
      this.refreshPage();
      this.isDataFetching = false;
    }).catch(error => {
      this.isDataFetching = false;
      alert("Getting Error while fetching data")
    });
  }

  /**
    * @ngdoc method
    * @name deletePost
    * @description
    * delete post
    * @param {Number} index
  */
  deletePost(postId: number){
    const modalRef = this.modalService.open(ConfirmationModalComponent)
    modalRef.result.then(data => {
      if(data){
        const findIndex = this.post.findIndex(p => p.id == postId)
        findIndex > -1 ? this.post.splice(findIndex, 1) : alert("Something went wrong!!");
        this.refreshPage();
      }
    }).catch(err => {})
  }

  refreshPage(){
    this.showPost = [];
    const count = this.pageSize * this.page;
    for (let index = count - this.pageSize; index < count; index++) {
      if(this.post[index]){
        this.showPost.push(this.post[index])
      }
    }
  }

}
