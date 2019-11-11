import { Component, OnInit, OnDestroy } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  roles: any;
  x: boolean=true;
  constructor(private token: TokenStorageService,private route:Router) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.roles = this.token.getAuthorities();
    if (this.token.getToken()) {
      if(this.roles[0]=='ROLE_ADMIN')
      this.x=false;
  }}
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
  logout() {
    this.token.signOut();
  this.route.navigate(['/home']);
  }
}
