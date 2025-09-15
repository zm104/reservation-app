import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListingsComponent } from './product-list/product-listing.component';
import { ProductService } from './shared/product.service';

const routes: Routes = [

  {
    path: 'products', component: ProductComponent, 
    children: [
      { path: '', component: ProductListingsComponent },
      { path: ':productId', component:ProductDetailComponent }
    ]
    
  },



];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListingsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [ProductService],
  bootstrap: []
})
export class ProductModule { }
