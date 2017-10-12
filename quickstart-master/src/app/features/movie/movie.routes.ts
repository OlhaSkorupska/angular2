import { Routes } from '@angular/router';
import { MovieComponent } from './movie.component';

export const MovieRoutes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent,
  }
];