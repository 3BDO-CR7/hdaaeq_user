import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseDatePage } from './choose-date';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ChooseDatePage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseDatePage),
    TranslateModule,
  ],
})
export class ChooseDatePageModule {}
