import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.use('en').then(() => {
      console.log(translate.data);
    });
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
  }

}
