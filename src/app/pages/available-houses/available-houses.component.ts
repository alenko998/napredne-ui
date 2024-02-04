import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

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
  ){}
  ngOnInit(): void {
    this.getAllHouses();
  }


  getAllHouses(){
    this.houseService.getAllHouses().subscribe(
      (response)=>{
        this.houses = response;
        console.log(this.houses);
        this.availableHouses = this.houses.filter((house: { isBlocked: any; isSwapped: any; }) => !house.isBlocked && !house.isSwapped); 
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
