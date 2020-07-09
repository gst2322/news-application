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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  // tslint:disable-next-line: max-line-length
  imports: [FormsModule ,CommonModule, TranslateModule, CoreModule, SharedModule, IonicModule, HomeRoutingModule,Ng2SearchPipeModule],
  entryComponents: [HomeComponent,NewsmodalComponent],
  declarations: [HomeComponent]
})
export class HomeModule {}
