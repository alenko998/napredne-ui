import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  URL = 'https://localhost:7297/api/';


  constructor(
    private httpClient: HttpClient,
    private userAuthService:UserAuthService
    ) { }

    getAllHouses(){
      return this.httpClient.get(this.URL + 'House',{
        headers: this.createAuthorizationHeader(),
      });
    }

    getSingleHouse(userId:any){
      return this.httpClient.get(this.URL + `House/signle-house/${userId}`,{
        headers: this.createAuthorizationHeader(),
      });
      
    }

    blockHouse(id:any){
      return this.httpClient.put(this.URL + `House/blocked-status/${id}`, {
        headers: this.createAuthorizationHeader(),
      });
    }

    deleteHouse(id:any){
      return this.httpClient.delete(this.URL + `House/delete/${id}`);
    }

    addHouse(houseDto:any){
      return this.httpClient.post(this.URL + 'House',houseDto,{
        headers: this.createAuthorizationHeader(),
      });
    }


    private createAuthorizationHeader(): HttpHeaders{
      return new HttpHeaders().set(
        'Authorization' , 'Bearer ' + this.userAuthService.getToken()
      )
    }
}
