import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header/header.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [
    ComponentsComponent
  ],

  imports: [
    CommonModule,
    HeaderModule
  ],

  exports: [
    ComponentsModule
  ]
})
export class ComponentsModule { }
