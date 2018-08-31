import { Component, OnInit } from '@angular/core';
import {MoreservicesandinfoService} from '../moreservicesandinfo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-moreservicesandinfo',
  templateUrl: './moreservicesandinfo.component.html',
  styleUrls: ['./moreservicesandinfo.component.css']
})
export class MoreservicesandinfoComponent implements OnInit {

  public services;

  //public book_name;

  constructor(private moreService: MoreservicesandinfoService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.moreService.getServices().subscribe(
      // the first argument is a function which runs on success
      data => { this.services = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading services')
    );
  }
}
