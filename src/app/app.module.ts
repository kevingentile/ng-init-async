import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async/async.component';
import { SyncComponent } from './sync/sync.component';
import { AsyncFakeComponent } from './asyncFake/asyncFake.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncComponent,
    SyncComponent,
    AsyncFakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
