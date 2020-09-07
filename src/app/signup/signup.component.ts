import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { SignupRequest } from './models/signup.request';
import { ApiService } from '../shared/services/api.service';
import { SignupResponse } from './models/signup.response';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    request: SignupRequest;
    showMessage: boolean;


    constructor(private translate: TranslateService, public router: Router, private apiService: ApiService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.request = new SignupRequest();
        this.showMessage = false;
    }

    ngOnInit() {}

    async onSignupin() {
        const response: SignupResponse = await this.apiService.post(this.request);
        if (response.success) {
          //localStorage.setItem('isLoggedin', 'true');
          this.router.navigateByUrl('/login');
        } else {
          this.request = new SignupRequest();
          this.showMessage = true;
        }
      }
    
      closeMessage() {
        this.showMessage = false;
      }
}
