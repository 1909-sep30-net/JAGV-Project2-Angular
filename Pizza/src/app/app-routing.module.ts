import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

//import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
//import { InterceptorService } from './interceptor.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'order/:id', component: OrderComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [
  //   {
  //     // provide: HTTP_INTERCEPTORS,
  //     // useClass: InterceptorService,
  //     // multi: true
  //   }
  // ]
})
export class AppRoutingModule { }