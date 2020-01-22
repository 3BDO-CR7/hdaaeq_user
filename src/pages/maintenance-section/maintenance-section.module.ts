import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintenanceSectionPage } from './maintenance-section';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MaintenanceSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintenanceSectionPage),
    TranslateModule,
  ],
})
export class MaintenanceSectionPageModule {}
