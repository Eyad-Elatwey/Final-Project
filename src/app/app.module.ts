import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { AccountComponent } from './pages/account/account.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { Eror404Component } from './pages/eror404/eror404.component';
import { CardComponent } from './component/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterSectionComponent } from './shared/footer-section/footer-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    WishlistComponent,
    CartComponent,
    CategoryComponent,
    AccountComponent,
    ProductDetailsComponent,
    Eror404Component,
    CardComponent,
    NavbarComponent,
 
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
