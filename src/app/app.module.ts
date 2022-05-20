import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async/async.component';
import { SyncComponent } from './sync/sync.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncComponent,
    SyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
