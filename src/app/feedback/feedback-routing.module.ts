import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeetbackComponent } from './components/feetback/feetback.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: 'feedback', component:FeetbackComponent
  },
  {
    path: 'success', component:ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
