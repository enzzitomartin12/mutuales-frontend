import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EntitiesRoutingModule } from './entities-routing.module';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EntityComponent } from './entities.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    imports: [
      CommonModule,
      EntitiesRoutingModule,
      PageHeaderModule,
      NgbModule,
      TranslateModule,
      AgmCoreModule.forRoot({
<<<<<<< HEAD
        apiKey: 'AIzaSyCxEZRp4tg_48enJ6DQuwqtaxz-R-f4pQw'
=======
        apiKey: 'AIzaSyAkRn_gN06xPes7K5ehY7lHm0elvo1fEUM'
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
      }),
      FormsModule,
      ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger' // default is danger
      })
    ],
    declarations: [EntityComponent]
  })
<<<<<<< HEAD
=======

>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  export class EntityModule {}

