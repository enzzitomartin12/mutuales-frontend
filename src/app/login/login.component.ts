import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../shared/services/api.service';
import { routerTransition } from '../router.animations';
import { LoginRequest } from './models/login.request';
import { LoginResponse } from './models/login.response';
<<<<<<< HEAD
=======
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  request: LoginRequest;
  showMessage: boolean;
<<<<<<< HEAD
=======
  nombre: String;
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653

  constructor(private translate: TranslateService, public router: Router, private apiService: ApiService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    this.request = new LoginRequest();
    this.showMessage = false;
<<<<<<< HEAD
=======
    this.nombre = '';
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  }

  ngOnInit() {}

  async onLoggedin() {
    const response: LoginResponse = await this.apiService.login(this.request);
    if (response.success) {
      localStorage.setItem('isLoggedin', 'true');
<<<<<<< HEAD
=======
      localStorage.setItem('userLog',JSON.stringify(response.data.firstName).split('"').join(''));
      //his.nombre=response.data.firstName;
      sessionStorage.setItem('lastName',JSON.stringify(response.data.lastName).split('"').join(''));

>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
      this.router.navigateByUrl('/dashboard');
    } else {
      this.request = new LoginRequest();
      this.showMessage = true;
    }
  }

  closeMessage() {
    this.showMessage = false;
  }
}
<<<<<<< HEAD
=======

>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
