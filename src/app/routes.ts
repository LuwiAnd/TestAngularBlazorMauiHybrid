import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { StartComponent } from './start/start.component';

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
  }
];

export default routeConfig;