import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreforntRoutingModule } from './storefornt-routing.module';
import { PTileComponent } from './components/p-tile/p-tile.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    PTileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    StoreforntRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class StoreforntModule { }
