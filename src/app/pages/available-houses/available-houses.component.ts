import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-available-houses',
  templateUrl: './available-houses.component.html',
  styleUrls: ['./available-houses.component.css']
})
export class AvailableHousesComponent implements OnInit{
  houses: any = [];
  availableHouses: any = [];
  constructor(
    private houseService:HouseService,
    private userAuthService: UserAuthService
  ){}
  ngOnInit(): void {
    this.getAllHouses();
  }


  getAllHouses(){
    this.houseService.getAllHouses().subscribe(
      (response)=>{
        this.houses = response;
        console.log(this.houses);
        this.availableHouses = this.houses.filter((house: { isBlocked: any; isSwapped: any; userId:any }) => !house.isBlocked && !house.isSwapped  && house.userId != this.userAuthService.getUserId()); 
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
