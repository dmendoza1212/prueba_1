import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiesgoRoutingModule } from './riesgo-routing.module';
import { RiesgoComponent } from './riesgo/riesgo.component';


@NgModule({
  declarations: [
    RiesgoComponent
  ],
  imports: [
    CommonModule,
    RiesgoRoutingModule
  ]
})
export class RiesgoModule { }
