import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotationsPage } from './quotations';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    QuotationsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotationsPage),
    TranslateModule,
  ],
})
export class QuotationsPageModule {}
