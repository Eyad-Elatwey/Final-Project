import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { Eror404Component } from './pages/eror404/eror404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'cart', component: CartComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'log-in', component: LogInComponent},
  { path: 'product-details', component: ProductDetailsComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'eror404', component: Eror404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
