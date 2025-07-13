import { Routes } from '@angular/router';
import { AppRoutes } from './utils/app-routes';
import { authGuard, noAuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
    { path: AppRoutes.PRODUCTS, loadComponent: () => import('./pages/products/products.component').then(c => c.ProductsComponent) },
    { path: AppRoutes.LOGIN, loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent), canActivate: [noAuthGuard]},
    { path: AppRoutes.REGISTER, loadComponent: () => import('./pages/register-client/register-client.component').then(c => c.RegisterClientComponent) , canActivate: [noAuthGuard]},
    { path: AppRoutes.ABOUT, loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent) },
    { path: AppRoutes.SERVICES, loadComponent: () => import('./pages/services/services.component').then(c => c.ServicesComponent) },
    { path: AppRoutes.CARRITO, loadComponent: () => import('./pages/carrito/carrito.component').then(c => c.CarritoComponent) },
    { path: AppRoutes.PANEL_CLIENT, loadChildren: () => import('./pages/panel-client/panel-client.module').then(m => m.PanelClientModule), canActivate: [authGuard] },
    { path: AppRoutes.PANEL_ADMIN, loadChildren: () => import('./pages/panel-admin/panel-admin.module').then(m => m.PanelAdminModule), canActivate: [authGuard] },
];
