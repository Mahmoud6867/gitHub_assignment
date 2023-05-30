import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahmoudComponent } from './mahmoud/mahmoud.component';
import { MohamedMahmoudComponent } from './mohamed-mahmoud/mohamed-mahmoud.component';

@NgModule({
  declarations: [
    AppComponent,
    MahmoudComponent,
    MohamedMahmoudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
