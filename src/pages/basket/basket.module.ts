import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasketPage } from './basket';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BasketPage,
  ],
  imports: [
    IonicPageModule.forChild(BasketPage),
    TranslateModule,
  ],
})
export class BasketPageModule {}
