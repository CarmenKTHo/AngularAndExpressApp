import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public foods;

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.demoService.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { this.foods = data },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
}
