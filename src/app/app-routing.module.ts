import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteModule } from './site/site.module';
import { HomeComponent } from './site/component/home/home.component';

const routes: Routes = [
  {
    path: '' , component: HomeComponent
  }
];

@NgModule({
  imports: [
    SiteModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
