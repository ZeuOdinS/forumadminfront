import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { CountDownModule } from  'ng6-countdown';

import { PagesModule } from "./pages/pages.module";

import { FooterComponent } from './footer/footer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,CountDownModule,
    HttpClientModule,    CollapseModule.forRoot(),

    RouterModule,
    AppRoutingModule,

    PagesModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
