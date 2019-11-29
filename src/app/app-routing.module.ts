import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMaterialComponent } from './lista-material/lista-material.component';
import { NovoMaterialComponent } from './novo-material/novo-material.component';

const routes: Routes = [
  {path: 'listagem', component: ListaMaterialComponent},
  {path: 'novo', component: NovoMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
