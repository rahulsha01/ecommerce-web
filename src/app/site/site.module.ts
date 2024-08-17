import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SiteDetailsComponent } from './component/site-details/site-details.component';
import { CartViewComponent } from './component/cart-view/cart-view.component';
import { LoginPageComponent } from './component/login-page/login-page.component';


/*
Angular Material Module
**/
import {MatInputModule} from '@angular/material/input';
import { SignupPageComponent } from './component/signup-page/signup-page.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

const routes: Routes = [{
  path : '' , 
  component : ShoppingListComponent
},
{path: 'product-details' , component: ProductDetailsComponent},
{path: 'cart' , component: CartViewComponent },
{path: 'weblogin' , component: LoginPageComponent },
{path: 'signup' , component: SignupPageComponent },
{path: 'forgotpassword' , component: ForgotPasswordComponent }

];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ShoppingListComponent,
    ProductListComponent,
    FooterComponent,
    ProductDetailsComponent,
    SiteDetailsComponent,
    CartViewComponent,
    LoginPageComponent,
    SignupPageComponent,
    ForgotPasswordComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule
  ]
})
export class SiteModule { }
