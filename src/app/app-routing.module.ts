import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { ThirdParentComponent } from './third-parent/third-parent.component';
import { SelectorComponent } from './selector/selector.component';

const routes: Routes = [
  { path: 'first-parent', component: FirstParentComponent },
  { path: 'second-parent', component: SecondParentComponent },
  { path: 'third-parent', component: ThirdParentComponent },
  { path: 'selector', component: SelectorComponent },
  { path: '', redirectTo:'/selector', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
