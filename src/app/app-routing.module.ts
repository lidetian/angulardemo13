import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { PlistComponent } from './components/product/plist/plist.component';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'news', component: NewsComponent },
//   { path: 'product', component: ProductComponent },
//   { path: 'newscontent/:aid', component: NewscontentComponent },
//   { path: 'productcontent', component: ProductcontentComponent },
//   { path: 'productcontent/:pid', component: ProductcontentComponent },
//   { path: '**', redirectTo:'home' },
// ];

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'setting', component: SettingComponent },
      { path: '**', redirectTo: 'welcome' },

    ]
  },
  {
    path: 'product', component: ProductComponent,
    children: [
      { path: 'pcate', component: PcateComponent },
      { path: 'plist', component: PlistComponent },
      { path: '**', redirectTo: 'pcate' },

    ]
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
