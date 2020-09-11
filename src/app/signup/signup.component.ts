import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { SignupRequest } from './models/signup.request';
import { ApiService } from '../shared/services/api.service';
import { SignupResponse } from './models/signup.response';
import { stringify } from 'querystring';
import { and } from '@angular/router/src/utils/collection';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    request: SignupRequest;
    showMessage: boolean;
    showMessageEmail: boolean;
    showMessageFirstName: boolean;
    showMessageLastName: boolean;
    showMessagePassword: boolean;
    showError: boolean;
    showVacio: boolean;
    regex: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    constructor(private translate: TranslateService, public router: Router, private apiService: ApiService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.request = new SignupRequest();
        this.showMessage = false;
        this.showMessageEmail = false;
        this.showMessageFirstName= false;
        this.showMessageLastName= false;
        this.showMessagePassword= false;
        this.showError= false;
        this.showVacio= false;
    }

    ngOnInit() {}

    validarEmail(email: string):void {
      if (this.regex.test(email)){
       this.showMessageEmail=false;
      } else {
       this.showMessageEmail=true; //Hay error
      }
    }
    validarVacio(req: SignupRequest):void{
      const pattern = new RegExp('^$');
      
      const reqs: SignupRequest = req;
      if(pattern.test(reqs.email) && pattern.test(reqs.firstName) && pattern.test(reqs.lastName) && pattern.test(reqs.password)){
        this.showVacio = true;
      }else{
        this.showVacio=false;
      }
    }
    soloLetrasF(firstName: string){
      const pattern = new RegExp('^[A-Z]+$', 'i');
      if (pattern.test(firstName)) {
        if(firstName.length>2){
          this.showMessageFirstName=false;
        }
        else{
          this.showMessageFirstName=true;
        }
      }else{
        this.showMessageFirstName=true;
      }
    }

    soloLetrasL(lastName: string){
      const pattern = new RegExp('^[A-Z]+$', 'i');
      if (pattern.test(lastName)) {
        this.showMessageLastName=false;
        if(lastName.length>2){
          this.showMessageLastName=false;
        }
        else{
          this.showMessageLastName=true;
        }
      }else{
        this.showMessageLastName=true;
      }
    }

    valPassword(pass: string){
      if (pass.length<6) {
        this.showMessagePassword=true;
      }
    }

    async onSignupin() {
      

       this.validarEmail(this.request.email);
        if (this.showMessageEmail) {
          if (this.request.email='') {
              this.showMessageEmail=false;
          }
        }
        this.validarVacio(this.request);
        if (this.showVacio) {
          this.showVacio = true;
          this.showMessage = false;
          this.showMessageEmail = false;
          this.showMessageEmail = false;
          this.showMessageFirstName= false;
          this.showMessageLastName= false;
          this.showMessagePassword= false;
          this.showError= true;
        }
        this.soloLetrasF(this.request.firstName);
        this.soloLetrasL(this.request.lastName);
        this.valPassword(this.request.password);

        if (this.showMessage == false &&
          this.showMessageEmail == false &&
          this.showMessageEmail == false &&
          this.showMessageFirstName == false &&
          this.showMessageLastName == false &&
          this.showMessagePassword== false &&
          this.showError== false &&
          this.showVacio==false) {
            const response: SignupResponse = await this.apiService.post(this.request);
            if (response.success) {
              //localStorage.setItem('isLoggedin', 'true');
              this.router.navigateByUrl('/login');
            } else {
              this.request = new SignupRequest();
              //this.showError=true;
              this.showMessage = true;
            }
          }
          else{
            this.showError = true;
          }
        }
    
      closeMessage() {
        this.showMessage = false;
        this.showMessageEmail = false;
        this.showMessageEmail = false;
        this.showMessageFirstName= false;
        this.showMessageLastName= false;
        this.showMessagePassword= false;
        this.showError= false;
        this.showVacio;
      }
}
