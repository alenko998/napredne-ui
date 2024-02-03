import { Component, OnInit } from '@angular/core';
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
  constructor(
    private userAuthService: UserAuthService,
    private houseService: HouseService
  ){}
  ngOnInit(): void {
    this.userId = this.userAuthService.getUserId();
    this.getSingleHouse();
  }



  getSingleHouse(){
    this.houseService.getSingleHouse(this.userId).subscribe(
      (response) => {
        console.log(response);
        this.myHouse = response;
        console.log(this.myHouse);
        
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
