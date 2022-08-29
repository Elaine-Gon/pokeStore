import { ComponentsComponent } from './../components/components.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    loadChildren: () =>
        import('../pages/home/home.module').then(
          (m) => m.HomeModule
        )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
