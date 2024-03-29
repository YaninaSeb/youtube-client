import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrationComponent } from './auth/pages/registration/registration.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { 
    path: 'search', 
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
