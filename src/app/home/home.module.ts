import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { NewsmodalComponent } from '@app/newsmodal/newsmodal.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, IonicModule, HomeRoutingModule],
  entryComponents: [HomeComponent,NewsmodalComponent],
  declarations: [HomeComponent]
})
export class HomeModule {}
