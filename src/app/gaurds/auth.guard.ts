import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';


// export const canActivate: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   return authService.checkLogin().pipe(
//     map(() => true),
//     catchError(() => {
//       return router.createUrlTree(['route-to-fallback-page']);
//     })
//   );
// };
export const authGuard: CanActivateFn = (route, 
  state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const toast = inject(NgToastService);
    if(authService.isLoggedIn()){
      return true;
    }
    else{
      toast.error({detail:'ERROR', summary: 'Please login first!'})
      router.navigate(['login'])
      return false;
    }
  
  // return true;
};
