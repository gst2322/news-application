import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';


import { QuoteService } from './quote.service';
import { NewsmodalComponent } from '@app/newsmodal/newsmodal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  articles: any;

  constructor(public modalController: ModalController,
    private quoteService: QuoteService,private apiService: ApiService) {}
    async presentModal(abc:any) {
      const modal = await this.modalController.create({
        component: NewsmodalComponent,
        cssClass: 'my-custom-class',
        componentProps: {
          'title': abc.title,
          'content':abc.content,
          'description':abc.description,
          'img':abc.urlToImage
        }
      });
      return await modal.present();
    }

  ngOnInit() {
    this.apiService.getGeneralNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
