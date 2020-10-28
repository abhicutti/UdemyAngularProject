import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { SortPipe } from './sort.pipe';
import { ReversePipePipe } from './reverse-pipe.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { MyAssigment1Component } from './my-assigment1/my-assigment1.component';
import { MyAssigment2Component } from './my-assigment2/my-assigment2.component';
import {HeaderComponent} from './header/header.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic.highlight/basic.highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import {HttpClientModule} from '@angular/common/http';
import { ShoppingModule } from './shopping-list/shopping.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MyAssigment1Component,
    MyAssigment2Component,
    HeaderComponent,
    ServerElementComponent,
    CockpitComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    ActiveUserComponent,
    InactiveUserComponent,
    ReversePipePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  SharedModule,
  CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
  username = '';

}
