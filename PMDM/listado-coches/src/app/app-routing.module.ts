import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { CochesListComponent } from './components/coches-list/coches-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'coches', component: CochesListComponent},
  {path: 'personas', component: PersonasListComponent},
  {path: '', redirectTo: '/coches', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
