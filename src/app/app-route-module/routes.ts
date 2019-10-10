import { Routes } from '@angular/router';
import { HomeComponent } from '../app-module/homeComponent/home.component';
import { DashBoardComponent } from '../app-module/dash-board-component/dash-board-component.component';
import { RouterGuard } from './services/route-guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [RouterGuard], },
    { path: 'dashboard', component: DashBoardComponent}
   ];
