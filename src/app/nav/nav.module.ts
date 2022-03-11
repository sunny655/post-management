import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, NavComponent]
})
export class NavModule { }
