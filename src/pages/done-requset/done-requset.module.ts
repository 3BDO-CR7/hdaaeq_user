import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoneRequsetPage } from './done-requset';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DoneRequsetPage,
  ],
  imports: [
    IonicPageModule.forChild(DoneRequsetPage),
    TranslateModule,
  ],
})
export class DoneRequsetPageModule {}
