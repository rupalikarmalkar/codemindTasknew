import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent, },
  {path:'sign-up',component:SignUpComponent},
  {path:'post',component:PostComponent},
// canActivate:[AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
