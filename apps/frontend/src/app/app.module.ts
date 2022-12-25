import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http'
import {FRONTEND_AUTH_PROVIDERS} from '@devpr.org/frontend/auth'

import {AppComponent} from './app.component'
import {RouterModule} from '@angular/router'
import {appRoutes} from './app.routes'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
  ],
  providers: [...FRONTEND_AUTH_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
