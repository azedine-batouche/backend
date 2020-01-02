import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { FaqComponent } from './components/faq/faq/faq.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'createCharacter',
    component: CreateCharacterComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

const routerOptions: ExtraOptions = { useHash: false, anchorScrolling: 'enabled'};

@NgModule({
  imports: [RouterModule.forRoot(routes,  routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
