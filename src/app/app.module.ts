import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreationStationComponent } from './components/creation-station-page/creation-station/creation-station.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login-form/login.component';
import { CreateUserComponent } from './components/login/create-user/create-user.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreationFormComponent } from './components/creation-station-page/creation-form/creation-form.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({

  declarations: [
    AppComponent,
    MainPageComponent,
    CreationStationComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    LoginComponent,
    CreateUserComponent,
    LoginPageComponent,
    NavBarComponent,
    AboutUsComponent,
    AccountPageComponent,
    NotFoundComponent,
    CreationFormComponent,
    FormComponent,
    ProductListComponent,
    ProductCardComponent
    
  ],

  imports: [BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    ReactiveFormsModule, BrowserAnimationsModule,
    MatFormFieldModule,
   
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
