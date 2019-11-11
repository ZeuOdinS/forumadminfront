import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AdminServiceService } from 'src/app/admin-service.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/model/user';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html"
})

export class LandingpageComponent {

  isCollapsed = true;
  modalRef: BsModalRef;
  form: any = {};
  signupInfo: User;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  user: any = {};
  users: any = [];
  x: any;
  userM: User;

  constructor(private tokenStorage: TokenStorageService, private route: Router, private serv: AdminServiceService, private authService: AuthService) { }

  ngOnInit() {
    if (!this.tokenStorage.getToken()) {

      this.route.navigate(['/home']);
    }
    this.serv.getUser().subscribe(q => { this.users = q; });


  }
  onSubmit(form, x) {
    console.log(form.value)
    this.authService.signUp(form.value).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        x.hide();
        this.serv.getUser().subscribe(q => {
          this.users = q;
        });

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  edit(item, myModal3) {
    console.log(myModal3.name)

    myModal3.show();
    this.user.idUser = item.idUser;

    this.user.name = item.name;
    this.user.phone = item.phone;
    this.user.username = item.username;
    this.user.enable = item.enable;
    this.user.roles = item.roles;
    this.user.password = item.password;

  }
  onEdit(form, x) {
    console.log(x.value);
    console.log(this.user.idUser);

    this.userM = new User(this.user.idUser, form.value.name, form.value.username,
      form.value.password, form.value.phone, form.value.roles, form.value.enable)
    this.serv.updateUser(this.userM).subscribe(data => {

      x.hide();
      this.serv.getUser().subscribe(q => {
        this.users = q;
      });
    },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }

    );
  }

}
