import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    CarouselComponent,
    ContactComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
