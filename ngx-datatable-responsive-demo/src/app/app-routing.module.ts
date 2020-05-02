import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';


const routes: Routes = [
  {path: '', component: ResponsiveTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
