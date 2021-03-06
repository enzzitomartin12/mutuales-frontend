import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ApiService } from '../../shared/services/api.service';
import { EntityForMap } from './models/entity.map.response';
import { Entity, EntityListResponse } from './models/entity.list.response';
import { EntityListRequest } from './models/entity.list.request';
import listados from "./models/listados.json";

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
  animations: [routerTransition()]
})
export class EntityComponent implements OnInit {
  response: EntityForMap;
  initialLatitude: number;
  initialLongitude: number;
  initialZoom: number;

  listRequest: EntityListRequest;
  listResponse: EntityListResponse;
  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;
  constructor(private apiService: ApiService) {
    this.listRequest = new EntityListRequest();
  }

  async ngOnInit(): Promise<void> {
    this.initialLatitude = -31.7274739;
    this.initialLongitude = -60.5194722;
    this.initialZoom = 8;
    await this.getItemsForMap(); //modificar

    this.itemsPerPage = this.listRequest.limit;

    await this.getItems();
    this.totalItems = this.listResponse.cantidad;
  }

  async getItemsForMap() {
    this.response = await this.apiService.getAllEntitiesForMap();
  }

  async getItems() {
    this.listResponse = await this.apiService.getAllEntities(this.listRequest);

  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.listRequest.offset = (page - 1) * this.listRequest.limit;
      this.getItems();
    }
  }
  clearForm(): void {
    this.listRequest = new EntityListRequest();
  }
}
