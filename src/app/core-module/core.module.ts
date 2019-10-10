import { NgModule } from '@angular/core';
import { RestrictInputDataDirective } from './directives/restrict-input-data';

@NgModule({
  declarations: [RestrictInputDataDirective],
  exports: [RestrictInputDataDirective]
})
export class CoreModule { }
