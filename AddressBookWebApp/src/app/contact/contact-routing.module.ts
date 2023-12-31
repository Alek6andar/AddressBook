import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
   
const routes: Routes = [
  { path: 'contact', redirectTo: 'contact/index', pathMatch: 'full'},
  { path: 'contact/index', component: IndexComponent },
  { path: 'contact/:contactId/view', component: ViewComponent },
  { path: 'contact/create', component: CreateComponent },
  { path: 'contact/:contactId/edit', component: EditComponent } 
];
   
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }