import { Routes } from '@angular/router';
import { MainRoutes, MovieRoutes} from './features/index';

export const ROUTES: Routes = [
    ...MainRoutes,
    ...MovieRoutes,
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
