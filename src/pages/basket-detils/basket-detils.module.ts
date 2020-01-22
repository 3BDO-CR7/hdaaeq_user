import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasketDetilsPage } from './basket-detils';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BasketDetilsPage,
  ],
  imports: [
    IonicPageModule.forChild(BasketDetilsPage),
    TranslateModule,
  ],
})
export class BasketDetilsPageModule {}
