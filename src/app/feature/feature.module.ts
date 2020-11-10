import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ftr1Component } from './ftr1/ftr1.component';
import { ModifiersComponent } from './modifiers/modifiers.component';



@NgModule({
  declarations: [Ftr1Component, ModifiersComponent],
  imports: [
    CommonModule
  ],
  exports: [Ftr1Component, ModifiersComponent]
})
export class FeatureModule { }
