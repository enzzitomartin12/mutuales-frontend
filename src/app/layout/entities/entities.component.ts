import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
import { routerTransition } from 'src/app/router.animations';
import { ApiService } from '../../shared/services/api.service';
import { EntityForMap } from './models/entity.map.response';
import { Entity, EntityListResponse } from './models/entity.list.response';
import { EntityListRequest } from './models/entity.list.request';
<<<<<<< HEAD
=======
import listados from "./models/listados.json";
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653

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
<<<<<<< HEAD

=======
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  constructor(private apiService: ApiService) {
    this.listRequest = new EntityListRequest();
  }

  async ngOnInit(): Promise<void> {
<<<<<<< HEAD
    this.initialLatitude = -31.8053418;
    this.initialLongitude = -59.1664531;
    this.initialZoom = 8;
    await this.getItemsForMap();
    await this.getItems();
    this.itemsPerPage = this.listRequest.limit;
    this.totalItems = this.listResponse.totalElements;
=======
    this.initialLatitude = -31.7274739;
    this.initialLongitude = -60.5194722;
    this.initialZoom = 8;
    await this.getItemsForMap(); //modificar

    this.itemsPerPage = this.listRequest.limit;

    await this.getItems();
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  }

  async getItemsForMap() {
    this.response = await this.apiService.getAllEntitiesForMap();
  }

  async getItems() {
    this.listResponse = await this.apiService.getAllEntities(this.listRequest);
<<<<<<< HEAD
=======
    this.totalItems = this.listResponse.cantidad;
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.listRequest.offset = (page - 1) * this.listRequest.limit;
      this.getItems();
    }
  }
<<<<<<< HEAD
=======
  clearForm(): void {
    this.listRequest = new EntityListRequest();
  }
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
}
