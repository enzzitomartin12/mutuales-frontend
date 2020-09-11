import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
<<<<<<< HEAD

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
=======
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
<<<<<<< HEAD
    SignupRoutingModule
  ],
=======
    SignupRoutingModule,
    FormsModule,
    NgbAlertModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule],
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  declarations: [SignupComponent]
})
export class SignupModule { }
