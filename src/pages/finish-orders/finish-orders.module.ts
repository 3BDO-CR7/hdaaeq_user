import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishOrdersPage } from './finish-orders';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FinishOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(FinishOrdersPage),
    TranslateModule,
  ],
})
export class FinishOrdersPageModule {}
