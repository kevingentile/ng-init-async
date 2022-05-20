import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { SyncComponent } from './sync/sync.component';

const routes: Routes = [{
  path: 'async',
  component: AsyncComponent,
},
{
  path: 'sync',
  component: SyncComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
