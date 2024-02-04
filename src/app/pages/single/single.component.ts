import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit{
  userId:any;
  houses:any = [];
  myHouse:any;
  isModalOpen = false;
  constructor(
    private userAuthService: UserAuthService,
    private houseService: HouseService,
    private router : Router
  ){}
  ngOnInit(): void {
    this.userId = this.userAuthService.getUserId();
    this.getSingleHouse();
  }

  addHouse(houseForm:NgForm){    
    const formData = { ...houseForm.value, userId: this.userId };
    this.houseService.addHouse(formData).subscribe(
      (response)=>{
       console.log(response);
      },
      (error)=>{
        console.log(error); 
      }
    )    
  }

  getSingleHouse(){
    this.houseService.getSingleHouse(this.userId).subscribe(
      (response) => {
        this.myHouse = response;
        console.log(this.myHouse);
        
      },
      (error) => {
        console.log(error);
        
      }
    )
  }



  deleteHouse(id:any){
    this.houseService.deleteHouse(id).subscribe(
      (response)=>{
        this.myHouse = null;
      },
      (error) => {
        console.log(error);
        
      }
    )
  }
  



  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
