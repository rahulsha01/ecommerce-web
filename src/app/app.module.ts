import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './component/left-nav/left-nav.component';
import { DashboardComponent } from './component/dashboard-component/dashboard-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonHeaderComponent } from './component/common-header/common-header.component';
import { GridToolComponent } from './component/grid-tool/grid-tool.component';
import { DatatableComponent } from './component/datatable/datatable.component';
import { LoginComponent } from './component/login/login.component';
import { FormContainerComponent } from './component/form-container/form-container.component';
import { WidgetComponent } from './component/elements/widget/widget.component';
import { AuthGuard } from './shared/auth.guard';
import { HttpInterceptorService } from './shared/http.interceptor';
import { environment } from '../environments/environment';
import {MatSelectModule} from '@angular/material/select';


// Module
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { CategoryComponent } from './component/category/category.component';
import { UserComponent } from './component/user/user.component';
import { ProductTableComponent } from './component/product-table/product-table.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



const routes:Routes = [
  { path: 'admin/login', component: LoginComponent },
  {path: 'admin/dashboard', component: DashboardComponent ,  canActivate: [AuthGuard]},
  { path: 'admin/category', component: CategoryComponent , canActivate: [AuthGuard] },
  { path: 'admin/user', component: UserComponent , canActivate: [AuthGuard] },
  { path: 'admin/product', component: ProductTableComponent , canActivate: [AuthGuard] },
  
  {
    path : 'home', 
    loadChildren : () => import('./site/site.module').then((site) => site.SiteModule )
  },
  // { path: '**' , redirectTo: 'home'  },
]
@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    DashboardComponent,
    CommonHeaderComponent,
    GridToolComponent,
    DatatableComponent,
    FormContainerComponent,
    WidgetComponent,    
    LoginComponent,
    CategoryComponent,
    UserComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [   
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }, 
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1000}}, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
