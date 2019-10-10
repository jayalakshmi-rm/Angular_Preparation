import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-route-module/app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HomeComponent } from './homeComponent/home.component';
import { DashBoardComponent } from './dash-board-component/dash-board-component.component';
import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';
import { CoreModule } from '../core-module/core.module';
import { SharedModule } from '../shared-module/shared.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    DashboardChildComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
