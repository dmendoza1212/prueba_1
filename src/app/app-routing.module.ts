import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { RiesgosComponent } from './views/riesgos/riesgos.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
const routes: Routes = [
  { path: 'riesgo', component: RiesgosComponent },

  { path: '', redirectTo: 'riesgo', pathMatch: 'full' },
  { path: '**', redirectTo: 'riesgo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
