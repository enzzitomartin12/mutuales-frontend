import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../login/models/login.request';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../../login/models/login.response';
import { UserListRequest } from '../../layout/users/models/user.list.request';
<<<<<<< HEAD
import { UserListResponse } from 'src/app/layout/users/models/user.list.response';
import { EntityForMap } from 'src/app/layout/entities/models/entity.map.response';
import { EntityListRequest } from 'src/app/layout/entities/models/entity.list.request';
import { EntityListResponse } from 'src/app/layout/entities/models/entity.list.response';
=======
import { UserListResponse, User } from 'src/app/layout/users/models/user.list.response';
import { EntityForMap } from 'src/app/layout/entities/models/entity.map.response';
import { EntityListRequest } from 'src/app/layout/entities/models/entity.list.request';
import { EntityListResponse } from 'src/app/layout/entities/models/entity.list.response';
import { EntityDetailRequest } from 'src/app/layout/entity-detail/models/entity.detail.request';
import { EntityDetailResponse } from 'src/app/layout/entity-detail/models/entity.detail.response';
import {SignupRequest} from '../../signup/models/signup.request'
import {SignupResponse} from '../../signup/models/signup.response'
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  /**
   * USERS
   */

  public login(request: LoginRequest): Promise<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiURL}/users/login`, request).toPromise();
  }

<<<<<<< HEAD
=======
    /**
   * SIGNUP
   */
  public post(request: SignupRequest): Promise<SignupResponse> {
    return this.httpClient.post<SignupResponse>(`${this.apiURL}/users/create`, request).toPromise();
  }

    /**
   * SIGNUP
   */

>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  public getUsers(request: UserListRequest): Promise<UserListResponse> {
    return this.httpClient.post<UserListResponse>(`${this.apiURL}/users`, request).toPromise();
  }

<<<<<<< HEAD
=======
  public getUser(id: number): Promise<User> {
    return this.httpClient.get<User>(`${this.apiURL}/users` + id).toPromise();
  }

>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  public removeUser(id: number): Promise<any> {
    return this.httpClient.delete(`${this.apiURL}/users/` + id).toPromise();
  }

  public getAllEntitiesForMap(): Promise<EntityForMap> {
<<<<<<< HEAD
    return this.httpClient.get<EntityForMap>(`${this.apiURL}/cooperatives/map`).toPromise();
  }

  public getAllEntities(request: EntityListRequest): Promise<EntityListResponse> {
    return this.httpClient.post<EntityListResponse>(`${this.apiURL}/cooperatives`, request).toPromise();
=======
    return this.httpClient.get<EntityForMap>(`${this.apiURL}/mutuales/map`).toPromise();
  }

  public getAllEntities(request: EntityListRequest): Promise<EntityListResponse> {
    return this.httpClient.post<EntityListResponse>(`${this.apiURL}/mutuales`, request).toPromise();
  }

  public getEntityDetail(request: EntityDetailRequest): Promise<EntityDetailResponse> {
    return this.httpClient.get<EntityDetailResponse>(`${this.apiURL}/mutuales/` + request.id).toPromise();
>>>>>>> f69769a619158196e47a3b397bae1e8e8b94a653
  }
}
