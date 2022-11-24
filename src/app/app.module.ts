import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { RedElDirective } from './red-el.directive';
import { FormsModule } from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { CourselistComponent } from './courselist/courselist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Comp1Component,
    Comp2Component,
    RedElDirective,
    UsdInrPipe,
    CourselistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
