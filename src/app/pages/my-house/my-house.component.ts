import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-my-house',
  templateUrl: './my-house.component.html',
  styleUrls: ['./my-house.component.css']
})
export class MyHouseComponent implements OnInit{
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
