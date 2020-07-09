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
  healthArticles:any
  scienceArticles:any
  sportsArticles:any
  techArticles:any

  searchNews:any;
  
  

  genNews=true;
  healthNews=false;
  SportsNews=false;
  SciNews=false;
  TechNews=false;
  

  constructor(public modalController: ModalController,
    private quoteService: QuoteService,private apiService: ApiService) {}
    async presentModal(abc:any) {
      const modal = await this.modalController.create({
        component: NewsmodalComponent,
        cssClass: 'my-modal-class',
        componentProps: {
         
          title: abc.title,
          content: abc.content,
          description: abc.description,
          img: abc.urlToImage,
          publishedAt: abc.publishedAt,
          url: abc.url
        }
      });
      return await modal.present();
    }

  ngOnInit() {
    this.apiService.getGeneralNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
    this.apiService.getHealthNews().subscribe((data)=>{
      console.log(data);
      this.healthArticles = data['articles'];
    });
    this.apiService.getScienceNews().subscribe((data)=>{
      console.log(data);
      this.scienceArticles = data['articles'];
    });
    this.apiService.getSportsNews().subscribe((data)=>{
      console.log(data);
      this.sportsArticles = data['articles'];
    });
    this.apiService.getTechnologyNews().subscribe((data)=>{
      console.log(data);
      this.techArticles = data['articles'];
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
