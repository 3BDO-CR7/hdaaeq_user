import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentOrdersPage } from './current-orders';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CurrentOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentOrdersPage),
    TranslateModule,
  ],
})
export class CurrentOrdersPageModule {}
