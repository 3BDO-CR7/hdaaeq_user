import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderDataPage } from './provider-data';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProviderDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderDataPage),
    TranslateModule,
  ],
})
export class ProviderDataPageModule {}
