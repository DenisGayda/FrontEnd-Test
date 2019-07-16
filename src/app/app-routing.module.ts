import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './components/pages/registration-page/registration-page.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';
import { TestsPageComponent } from './components/pages/tests-page/tests-page.component';
import { TestPassingPageComponent } from './components/pages/test-passing-page/test-passing-page.component';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';


const routes: Routes = [
{path: 'login', component: LoginPageComponent},
{path: 'register', component: RegistrationPageComponent},
{path: 'user', component: UserPageComponent},
{path: 'tests', component: TestsPageComponent},
{path: 'test', component: TestPassingPageComponent},
{path: 'admin', component: AdminPageComponent},
{path: 'notfound', component: NotFoundPageComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}