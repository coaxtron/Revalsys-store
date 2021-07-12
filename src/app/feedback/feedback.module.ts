import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeetbackComponent } from './components/feetback/feetback.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LocalStorageService } from './service/local-storage.service';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


@NgModule({
  declarations: [
    FeetbackComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule
  ],
  providers:[LocalStorageService]
})
export class FeedbackModule { }
