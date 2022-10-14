import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    NavbarModule,
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
