import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EntityDetailRoutingModule } from './entity-detail-routing.module';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EntityDetailComponent } from './entity-detail.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [EntityDetailComponent],
  imports: [
    CommonModule,
    EntityDetailRoutingModule,
    PageHeaderModule,
    NgbModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkRn_gN06xPes7K5ehY7lHm0elvo1fEUM'
    }),
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // default is danger
    })
  ],

})
export class EntityDetailModule { }
