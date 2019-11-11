import { Component, OnInit, OnDestroy } from "@angular/core";
import { ExcelServicesService } from 'src/app/services/excel-services.service';
import { AdminServiceService } from 'src/app/admin-service.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;

  data = [{'name':'ahmed', 'anil.singh581@gmail.comcccccccccccccccccccccssssssssssssssssssssssccccccccccccccccccc' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
    {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Sunissssssssssssssssl', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
   ];
   
  x = [{'name':'Anil', 'anil.singh581@gmail.comcccccccccccccccccccccssssssssssssssssssssssccccccccccccccccccc' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
  {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  {'name':'Sunissssssssssssssssl', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
  {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
 ]
 etudiant: any;
  entreprise: any;
  employes: any;
  roles: string[];


 constructor(private excelService:ExcelServicesService,private route:Router, private serv:AdminServiceService,private tokenStorage: TokenStorageService){  

 }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    console.log(!this.tokenStorage.getToken())
    if (!this.tokenStorage.getToken()) {
    
        this.route.navigate(['/home']);
    }
    this.serv.getEmploye().subscribe(q => { this.employes = q; });
    this.serv.getEntreprise().subscribe(q => { this.entreprise = q; })
    this.serv.getEtudiant().subscribe(q => { this.etudiant= q; })


  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
  exportAsXLSX(x):void { 
    console.log(x) 
  this.excelService.exportAsExcelFile(x, 'liste_inscription');  
 }  
}
