import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        FormsModule,
        NgbAlertModule,
<<<<<<< HEAD
        HttpClientModule],
=======
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule],
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
    declarations: [LoginComponent]
})
export class LoginModule {}
