import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { StartComponent } from './start/start.component';
import { BlazorHostComponent } from './blazor-host/blazor-host.component';

const routeConfig: Routes = [
  {
    path: '',
    component: StartComponent,
    title: 'Start page'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'blazor/:page',
    component: BlazorHostComponent,
    title: 'Blazor page'
  }
];

export default routeConfig;