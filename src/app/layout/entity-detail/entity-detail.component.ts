import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { EntityDetailRequest } from 'src/app/layout/entity-detail/models/entity.detail.request';
import { EntityDetail,EntityDetailResponse } from 'src/app/layout/entity-detail/models/entity.detail.response';
import { EntityMap,EntityForMap } from '../entities/models/entity.map.response';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.scss'],
  animations: [routerTransition()]
})
export class EntityDetailComponent implements OnInit {
  //response: EntityForMap;
  //mutual: EntityMap;
  initialLatitude: number;
  initialLongitude: number;
  initialZoom: number;

  detailRequest: EntityDetailRequest;
  detailResponse: EntityDetailResponse;
  mutual: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { 
    this.detailRequest = new EntityDetailRequest();
    this.initialLatitude = -31.7274739;
    this.initialLongitude = -60.5194722;
    this.initialZoom = 8;
  }

  async ngOnInit(): Promise<void> {
    this.detailRequest.id = this.route.snapshot.params.id;
    await this.getEntityDetail();
    console.log(this.detailResponse);
    //await this.getItemsForMapMut();
   }

  async getEntityDetail() {
    //this.detailResponse = await this.apiService.getEntityDetail(this.detailRequest);
    this.detailResponse = await this.apiService.getEntityDetail(this.detailRequest);

  }

  /*async getItemsForMapMut() {
    this.response = await this.apiService.getAllEntitiesForMap();
    for  (let i=0;i<200;i++ ){
      if (this.response.mutuales[i].id==this.detailRequest.id) {
         this.mutual=this.response.mutuales[i];
      }
    }
  }*/
}
