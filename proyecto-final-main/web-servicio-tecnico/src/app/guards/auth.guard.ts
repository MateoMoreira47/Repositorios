import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRoutes } from '../utils/app-routes';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.user
  console.log("🚀 ~ user:", user.role)

  if(!user) {
    router.navigate([AppRoutes.LOGIN])
    return false
  }


  if(user.role === 'ADMIN' && !state.url.includes(AppRoutes.PANEL_ADMIN)) {
    router.navigate([AppRoutes.PANEL_ADMIN])
  }

  // router.navigate([AppRoutes.PANEL_CLIENT])
  return true
};

export const noAuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.user

  if(user) {

    if(user.role === 'ADMIN'){
      router.navigate([AppRoutes.PANEL_ADMIN])
    } else {
      router.navigate([AppRoutes.PANEL_CLIENT])
    }

    return false
  }

  return true
};
