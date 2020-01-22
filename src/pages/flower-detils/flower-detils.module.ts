import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowerDetilsPage } from './flower-detils';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FlowerDetilsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowerDetilsPage),
    TranslateModule,
  ],
})
export class FlowerDetilsPageModule {}
