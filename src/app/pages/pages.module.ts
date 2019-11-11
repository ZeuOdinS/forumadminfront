import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { IndexComponent } from "./index/index.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { CountDownModule } from 'ng6-countdown';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { DataTableModule } from 'ng-angular8-datatable';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,CountDownModule,CountdownTimerModule.forRoot(),
    RouterModule,NgxPageScrollModule, 
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(), ModalModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),DataTableModule,

    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    IndexComponent,HeaderComponent,
    ProfilepageComponent,
    
    LandingpageComponent,HeaderAdminComponent,

    
  
  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    LandingpageComponent
  ],
  providers: [],
  entryComponents:[]
})
export class PagesModule {}
