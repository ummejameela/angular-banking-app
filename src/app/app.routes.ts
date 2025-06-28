import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';
import { CustomerAccountFormComponent } from './customer-account-form/customer-account-form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent

    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'accountDetails',
                component: AccountComponent
            },
            {
                path: 'customerAccountForm',
                component: CustomerAccountFormComponent
            },
            
            {
                path: '',
                redirectTo: 'customer',
                pathMatch: 'full'

            },

        ]
    },
    {
                path:'login',
                component: LoginComponent
            },


    {
        path: '**',
        redirectTo: ''
    },
];
