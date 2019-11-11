import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { AuthLoginInfo } from 'src/app/model/login';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { UserService } from 'src/app/auth/UserService';

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent  {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
 
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  board: string;
  constructor(private authService: AuthService,private route:Router, private tokenStorage: TokenStorageService,private userService:UserService) { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles=this.tokenStorage.getAuthorities();
      if (this.tokenStorage.getToken()) {
        if(this.roles[0]=='ROLE_ADMIN')
        this.route.navigate(['/inscriptions']);
      else
        this.route.navigate(['/gestionadmin']);          
      }}

    
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

   /* noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }*/}
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
  
  onSubmit(form) {

console.log(form.value)
 
    this.authService.attemptAuth(form.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
 
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        if (this.tokenStorage.getToken()) {
          if(this.roles[0]=='ROLE_ADMIN')
          this.route.navigate(['/inscriptions']);
        else
          this.route.navigate(['/gestionadmin']);          
        }
    
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
