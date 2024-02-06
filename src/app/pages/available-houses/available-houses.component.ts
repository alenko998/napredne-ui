import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  isModalOpen:any;
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

  filterHouses(form:NgForm){
    const formValues: { [key: string]: any } = {};

  // Iterate through form controls
    Object.keys(form.controls).forEach(key => {
    const control = form.controls[key];

    // Check if the control has been touched or its value is not empty
    if ((control.dirty || control.touched) && control.value !== '') {
      formValues[key] = control.value;
    }
  });
    this.isModalOpen=false;

    
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
