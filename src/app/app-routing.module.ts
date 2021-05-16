import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DrugRegistrationComponent} from './drug-registration/drug-registration.component';
import {DrugsComponent} from './drugs/drugs.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'newdrug', component: DrugRegistrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'drugs', component: DrugsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
