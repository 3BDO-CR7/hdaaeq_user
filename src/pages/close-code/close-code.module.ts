import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloseCodePage } from './close-code';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CloseCodePage,
  ],
  imports: [
    IonicPageModule.forChild(CloseCodePage),
    TranslateModule,
  ],
})
export class CloseCodePageModule {}
