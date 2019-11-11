// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { MapComponent } from './map/map.component';
// import { AuthGuard } from './auth.guard';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { InterceptorService } from './interceptor.service';

// const routes: Routes = [
//   { path: 'Login', component: LoginComponent },
//   { path: 'Map', component: MapComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: InterceptorService,
//       multi: true
//     }
//   ]
// })
// export class AppRoutingModule { }