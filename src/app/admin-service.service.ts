import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  private baseURI: String = "http://localhost:8080/ForumEnsit/";
  private header = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

 /****************************Employe*******************************/
 getEmploye(): Observable<any> {
  return this.http.get(this.baseURI +'employes', { headers: this.header });
}
 /***************************Etudiant*******************************/
 getEtudiant(): Observable<any> {
  return this.http.get(this.baseURI +'etudiant', { headers: this.header });
}
 /****************************Entreprise*******************************/
 getEntreprise(): Observable<any> {
  return this.http.get(this.baseURI +'entreprise', { headers: this.header });
}
 /****************************Gestion User*******************************/
 getUser(): Observable<any> {
  return this.http.get(this.baseURI +'users', { headers: this.header });
}
addUser(x) {
  return this.http.post(this.baseURI +'signup', x, { headers: this.header });
}

updateUser(x) {
  console.log(x)
  return this.http.put(this.baseURI +'updateUser/'+x.idUser,x, { headers: this.header });
}



}
