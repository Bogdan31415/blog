import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {SharedModule} from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AuthGuard} from '../shared/classes/auth.guard';
import {PostComponent} from "../shared/components/post/post.component";

@NgModule({
  declarations: [
    UserLayoutComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: UserLayoutComponent, canActivate: [AuthGuard], children: [
          {path: '', redirectTo: '/user', pathMatch: 'full'},
          {path: 'dashboard', component: DashboardPageComponent},
          {path: '', component: HomePageComponent},
          {path: 'post/:id', component: PostComponent},
          {path: 'create', component: CreatePageComponent},
          {path: 'post/:id/edit', component: EditPageComponent}
        ]
      }
    ]),
    SharedModule,
    MatProgressSpinnerModule,
  ],
  exports: [RouterModule],
  providers: []
})
export class UserModule {

}
