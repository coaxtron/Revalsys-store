import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeetbackComponent } from './components/feetback/feetback.component';

const routes: Routes = [
  {
    path: 'feedback', component:FeetbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
