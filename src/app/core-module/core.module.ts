import { NgModule } from '@angular/core';
import { RestrictInputDataDirective } from './directives/restrict-input-data';
import { HttpClientModule } from '@angular/common/http';
import { CamelCasePipe } from './pipes/camel-case.pipe';

@NgModule({
  imports: [HttpClientModule],
  declarations: [RestrictInputDataDirective, CamelCasePipe],
  exports: [RestrictInputDataDirective, CamelCasePipe]
})
export class CoreModule { }
