import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoreservicesandinfoService } from './moreservicesandinfo.service';
import { TranslateService } from './translate.service';

import { AppComponent }  from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MoreservicesandinfoComponent } from './moreservicesandinfo/moreservicesandinfo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AppRoutingModule } from './/app-routing.module';
import { PdoclandingComponent } from './pdoclanding/pdoclanding.component';
import { PdocComponent } from './pdoc/pdoc.component';
import { HeaderwithoutsearchComponent } from './headerwithoutsearch/headerwithoutsearch.component';
import { FooterminimalComponent } from './footerminimal/footerminimal.component';
import { NavsideComponent } from './navside/navside.component';
import { TranslatePipe } from './translate.pipe';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
    declarations: [
      AppComponent,
      CarouselComponent,
      MoreservicesandinfoComponent,
      HeaderComponent,
      FooterComponent,
      HomepageComponent,
      PdoclandingComponent,
      PdocComponent,
      HeaderwithoutsearchComponent,
      FooterminimalComponent,
      NavsideComponent,
      TranslatePipe
    ],
    providers: [
      MoreservicesandinfoService,
      TranslateService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
