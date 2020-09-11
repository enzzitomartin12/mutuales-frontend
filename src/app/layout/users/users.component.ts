import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiService } from '../../shared/services/api.service';
import { User, UserListResponse } from './models/user.list.response';
import { UserListRequest } from './models/user.list.request';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
  request: UserListRequest;
  response: UserListResponse;
  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;
<<<<<<< HEAD
=======
  responseUser: User;
  requestUser: number;
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653

  async ngOnInit(): Promise<void> {
    await this.getUsers();
    this.itemsPerPage = this.request.limit;
    this.totalItems = this.response.totalElements;
  }

  constructor(private apiService: ApiService) {
    this.request = new UserListRequest();
  }

  async getUsers() {
    this.response = await this.apiService.getUsers(this.request);
  }

  async deleteUser(id: number) {
    await this.apiService.removeUser(id);
    await this.getUsers();
  }

  clearForm(): void {
    this.request = new UserListRequest();
    this.getUsers();
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.request.offset = (page - 1) * this.request.limit;
      this.getUsers();
    }
  }
<<<<<<< HEAD
=======
async getUSer(){
    this.responseUser = await this.apiService.getUser(this.requestUser);
}

>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
}
