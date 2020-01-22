import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowersSectionPage } from './flowers-section';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FlowersSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowersSectionPage),
    TranslateModule,
  ],
})
export class FlowersSectionPageModule {}
