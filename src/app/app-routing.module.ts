import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailslistComponent} from './userdetailslist/userdetailslist.component';
import { ImportComponent } from './import/import.component';

const routes: Routes = [{
  path:"",
  component:UserdetailsComponent
},{
  path:"userdetailslist",
  component:UserdetailslistComponent
},{
  path:"import",
  component:ImportComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
