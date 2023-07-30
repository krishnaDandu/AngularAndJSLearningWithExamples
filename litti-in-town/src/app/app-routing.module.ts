import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HistoryComponent } from './pages/history/history.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**',  component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
