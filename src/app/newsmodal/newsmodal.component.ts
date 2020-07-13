import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsmodal',
  templateUrl: './newsmodal.component.html',
  styleUrls: ['./newsmodal.component.scss']
})
export class NewsmodalComponent implements OnInit {
  @Input() title: string;
  @Input() publishedAt: string;
  @Input() img: string;
  @Input() url: string;
  @Input() content: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
