import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreationStationComponent } from './components/creation-station-page/creation-station/creation-station.component';
import { CreateUserComponent } from './components/login/create-user/create-user.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [

  {path: "", component: MainPageComponent},
  {path: "home", component: MainPageComponent},
  
  {path: "shop", component: ProductListComponent},
  {path: "login", component: LoginPageComponent},
  {path: "aboutus", component: AboutUsComponent},
  {path: "cart", component: ShoppingCartComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "newuser", component: CreateUserComponent},
  {path: "form", component: FormComponent},
  {path: "account", component: AccountPageComponent},

  {path: "**", redirectTo: "not-found"}
  // {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
