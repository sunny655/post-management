import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { NavModule } from '../nav/nav.module';
import { ModulesComponent } from './modules.component';
import { PostListComponent } from './post-list/post-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EllipsisDirective } from '../ellipsis.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ModulesComponent, PostListComponent, PostDetailComponent, EllipsisDirective],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    NavModule,
    FontAwesomeModule,
    FormsModule,
    NgbPaginationModule,
    HttpClientModule
  ]
})
export class ModulesModule { }
