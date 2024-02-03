import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-available-houses',
  templateUrl: './available-houses.component.html',
  styleUrls: ['./available-houses.component.css']
})
export class AvailableHousesComponent implements OnInit{
  houses: any = [];
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
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
