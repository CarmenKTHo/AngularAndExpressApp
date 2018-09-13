import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show: boolean = true;

  constructor(private translate: TranslateService) {
    translate.use('en').then(() => {
      console.log(translate.data);
    });
  }

  setLang(lang: string) {
    this.translate.use(lang);
    if(lang==="en") this.show = true;
    if(lang==="fr") this.show = false;
  }
  ngOnInit() {
  }

}
