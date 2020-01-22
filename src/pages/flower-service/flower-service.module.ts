import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowerServicePage } from './flower-service';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FlowerServicePage,
  ],
  imports: [
    IonicPageModule.forChild(FlowerServicePage),
    TranslateModule,
  ],
})
export class FlowerServicePageModule {}
