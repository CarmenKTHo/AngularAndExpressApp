import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MoreservicesandinfoService} from './moreservicesandinfo.service';

import { AppComponent }  from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MoreservicesandinfoComponent } from './moreservicesandinfo/moreservicesandinfo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
    declarations: [AppComponent,
      CarouselComponent,
      MoreservicesandinfoComponent, 
      HeaderComponent,
      FooterComponent],
    providers: [MoreservicesandinfoService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
